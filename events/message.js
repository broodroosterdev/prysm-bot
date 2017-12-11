const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, message) => {
    client.SettingsTable = client.settings.get(message.guild.id);
    client.OwnerId = message.guild.ownerID

    var prefix = client.SettingsTable.prefix
    if(message.author.equals(client.user)) return;
    if (!(message.content.toLowerCase()).startsWith(prefix)) return;
    var args = message.content.substring(client.SettingsTable.prefix.length).split(/ +/g)
    
    client.log("Log", args[1], "Command Fired")
    

    if(client.commands.has(args[1])) {
        client.commands.get(args[1])(client, message, args);
    }
    if(!client.commands.has(args[1])){
        message.react('❌')
    }

}