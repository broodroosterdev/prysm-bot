const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    message.channel.send("Loading...").then(msg => {
    var term = message.content.slice(SettingsTable.prefix.length + 6)
    snekfetch.get(`http://api.urbandictionary.com/v0/define?term=${term}`).then(urban => {
        var embed = new Discord.RichEmbed()
        .setColor(0x000000)
        .addField("Term", `${urban.body.list[0].word}`) 
        .addField("Definition", `${urban.body.list[0].definition}`)
        .addField("Example", `${urban.body.list[0].example}`)
        .addField("Author", `${urban.body.list[0].author}`)
        .setAuthor(client.user.username, client.user.avatarURL)
        .setTitle("Urban Dictionary")
        .setURL(urban.body.list[0].permalink)
        .setImage("https://vignette.wikia.nocookie.net/creation/images/b/b7/Urban_dictionary_--_logo.jpg")
        msg.delete()
        message.channel.send(embed)
        })
    });
}
