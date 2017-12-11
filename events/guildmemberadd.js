const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, member) => {
    const SettingsTable = client.settings.get(member.guild.id);
    if(SettingsTable.welcomeTrigger === false) return;
    WelcomeMessage = SettingsTable.welcomeMessage.split('*')
    member.guild.channels.find("name", SettingsTable.modLogChannel).send(WelcomeMessage[0] + member.toString() + WelcomeMessage[1])
}