const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const ModRole = message.guild.roles.find("name", SettingsTable.modRole)
    if(ModRole === null) {
        message.channel.send(`Please first set the ModRole correctly. For help setting it up please type: \`\`\`${SettingsTable.prefix} help set\`\`\``)
        return;
    }
    const Modrole = ModRole.id
    if(!message.member.roles.has(Modrole)) return;
    
    var args = message.content.substring(SettingsTable.prefix.length + "setwelcomemessage ").split(`!`)
    
    SettingsTable.welcomeMessage = args[1];
    client.settings.set(message.guild.id, SettingsTable)
    message.channel.send("The WelcomeMessage has been set to \`" + SettingsTable.welcomeMessage + "\` on this server!")
        
    message.guild.channels.find("name", SettingsTable.modLogChannel).send("The WelcomeMessage has been set to \`" + SettingsTable.welcomeMessage + "\` on this server by: " + message.author.toString())
}