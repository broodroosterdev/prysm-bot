const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    var channel = message.content.slice(SettingsTable.prefix.length + 15)
    const ModRole = message.guild.roles.find("name", SettingsTable.modRole)
    if(ModRole === null) {
        message.channel.send(`Please first set the ModRole correctly. For help setting it up please type: \`\`\`${SettingsTable.prefix} help set\`\`\``)
        return;
    }
    const Modrole = ModRole.id
    if(!message.member.roles.has(Modrole)) return;
    if(!channel) {
        message.channel.send(`Please provide an valid channel for mod-logs. For help on providing a valid mod-log type: ${SettingsTable.prefix} help-setlogchannel`)
        return;
    }
    try {
        var channelinserver = message.channel.guild.channels.find("name", channel)
        if (!channelinserver) {
            throw `The channel \`${channel}\` doesnt exist in the server`;
        }
    } catch (err) {
        return message.channel.send(`${err}. Did you enter it correctly?`)
    }
    
    SettingsTable.modLogChannel = channel;
    client.settings.set(message.guild.id, SettingsTable);
    message.channel.send("The default modlog-channel has been set to: ```\n" + SettingsTable.modLogChannel + "\n``` ")

    message.guild.channels.find("name", SettingsTable.modLogChannel).send("The default modlog-channel has been set to: ```\n" + SettingsTable.modLogChannel + "\n``` by user: " + message.author.toString())



}