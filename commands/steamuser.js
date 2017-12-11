const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports = (client, message, args) => {
    var steamids = "7656119796043553"
    const SettingsTable = client.settings.get(message.guild.id);
    steamid = message.content.slice(SettingsTable.prefix.length + 11)
    var playersummaries = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${client.config.steamapikey}&steamids=${steamid}`
    var playerlevel = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${client.config.steamapikey}&steamid=${steamid}`
    var playergames = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${client.config.steamapikey}&steamid=${steamid}`
    var playersbans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${client.config.steamapikey}&steamids=${steamid}`
    
    message.channel.send("Loading...").then(msg => {
        if(isNaN(steamid) === true) {
            msg.delete()
            message.channel.send("Please supply an valid SteamID64. Use https://steamid.io/ to convert any steamid or custom-url to steamid64")
            return
        }
    snekfetch.get(playersummaries).then(summariesresponse => {
        let response = summariesresponse.body.response
        
        let entry = response.players.find(account => account.steamid === steamid);
        if(!entry) {
            msg.delete()
            message.channel.send("Im afraid this steam account doesnt exist. Did you enter the steamID64 correctly?")
            return
        }
    snekfetch.get(playerlevel).then(level => {
        let steamlvl = level.body.response.player_level
    snekfetch.get(playergames).then(games => {
        let game_count = games.body.response.game_count
    snekfetch.get(playersbans).then(playerbans => {
        let bans = playerbans.body.players.find(account => account.SteamId === steamid)
    
    var isbanned = `This user has a ban on his record.\nHe has so far gone on ${bans.NumberOfVACBans} VACations\nand has been banned ${bans.NumberOfGameBans} times in game.`    
    if((bans.VACBanned === false)&&(bans.CommunityBanned === false)&&(bans.NumberOfVACBans === 0)&&(bans.NumberOfGameBans === 0)) var isbanned = `This user has no bans on his record.`

    var datecreated = moment.unix(entry.timecreated).format("DD/MM/YYYY");
    var datalastonline = moment.unix(entry.lastlogoff).format("DD/MM[ at: ]HH:mm")
    var firstbit = `Comes from: ${entry.loccountrycode} and has created the account on: ${datecreated}.`
    if(!entry.loccountrycode) var firstbit = `The account has been created on: ${datecreated}.`
    var embed = new Discord.RichEmbed()
    .setAuthor(entry.personaname, entry.avatar)
    .setURL(entry.profileurl)
    .setDescription(`${firstbit}\n${entry.personaname} has been last online on: ${datalastonline}`)
    .setThumbnail(entry.avatarmedium)
    .addField("Steamlevel", steamlvl, true)
    .addField("Owned Games", game_count, true)
    .addField("Ban History" , isbanned, true)
    msg.delete()
    message.channel.send(embed)
    })
    })
    })
})
})
}
