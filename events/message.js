const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, message) => {
    if(message.author.equals(client.user) || !(message.channel.type == "text")) return;
    
    client.SettingsTable = client.settings.get(message.guild.id);
    var args = message.content.substring(client.SettingsTable.prefix.length).split(/ +/g)

    if(!(message.content.toLowerCase()).startsWith(client.SettingsTable.prefix)  || !(client.commands.has(args[1]))) return;
        client.commands.get(args[1]).run(client, message, args);    
}