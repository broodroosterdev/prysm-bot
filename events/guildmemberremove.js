const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, member) => {
    const SettingsTable = client.settings.get(member.guild.id);
    if(SettingsTable.welcomeTrigger === false) return;
    if(!leaveMessage) return;
    leaveMessage = SettingsTable.leaveMessage.split('*')
    member.guild.channels.find("name", SettingsTable.modLogChannel).send(leaveMessage[0] + member.toString() + leaveMessage[1])
    
}