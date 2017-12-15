const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports.run = (client, message, args) => {
    
    const SettingsTable = client.settings.get(message.guild.id);
    const ModRole = message.guild.roles.find("name", SettingsTable.modRole)
    if(ModRole === null) {
        message.channel.send(`Please first set the ModRole correctly. For help setting it up please type: \`\`\`${SettingsTable.prefix} help-setmodrole\`\`\``)
        return;
    }
    const Modrole = ModRole.id
    if(!message.member.roles.has(Modrole)) return;
    switch(SettingsTable.welcomeTrigger) {
        case true: {
            SettingsTable.welcomeTrigger = false;
            client.settings.set(message.guild.id, SettingsTable)
            message.channel.send("The Welcome messages have been disabled on the server!")
        
            message.guild.channels.find("name", SettingsTable.modLogChannel).send("The Welcome messages have been disabled by user: " + message.author.toString())
            break;}
        case false: {
            SettingsTable.welcomeTrigger = true;
            client.settings.set(message.guild.id, SettingsTable)
            message.channel.send("The Welcome messages have been enabled on the server!")
        
            message.guild.channels.find("name", SettingsTable.modLogChannel).send("The Welcome messages have been enabled by user: " + message.author.toString())
        }

    }
    
    



}