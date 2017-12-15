const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    
    message.channel.send("The default prefix has been set to: ```\n" + SettingsTable.prefix + "\n``` ")
    message.channel.send("The modlog channel has been set to: ```\n" + SettingsTable.modLogChannel + "\n``` ")
    message.channel.send("The Mod-Role has been set to: ```\n" + SettingsTable.modRole + "\n``` ")
    
    if(SettingsTable.welcomeTrigger === true) {
        message.channel.send("The welcome message has been set to: ```\n" + SettingsTable.welcomeMessage + "\n``` ")
        return;
    }
    if(SettingsTable.welcomeTrigger === false) {
        message.channel.send("The welcome message has been disabled on this server. How sad...")
        return;
    }



    



}