const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const ModRole = message.guild.roles.find("name", SettingsTable.modRole)
    if(ModRole === null) {
        message.channel.send(`Please first set the ModRole correctly. For help setting it up please type: \`\`\`${SettingsTable.prefix} help set\`\`\``)
        return;
    }
    const Modrole = ModRole.id
    if(!message.member.roles.has(Modrole)) return;
    const user = message.mentions.members.first();
    if (!user) return message.reply("Please specify a user to ban.")
    if(client.ishigherthan(client, user, message) == false) return message.reply("This user is too high for me to ban. Please put me higher or the user you want to ban lower in the role tab")
    const amount = message.content.slice(SettingsTable.prefix.length + 4).split(" ")
    const number = amount[2]
    if (!number) return message.reply('Must specify an amount of days to ban all of the messages of the user!');
    const reason = message.content.slice(SettingsTable.prefix.length + 4 + 25)
    var because = ``
    if(reason){
        because = ` because ${reason}.`
    } else {
        because = `.`
    }

    user.ban({
        days: number,
        reason: reason
      })
    message.channel.send(`How sad... ${user.toString()} has just been banned for ${number} days${because}`)
}