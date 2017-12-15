
const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    var modrole = message.content.slice(SettingsTable.prefix.length + 12);
    if (!modrole) {
        return message.channel.send("Please provide a valid modrole")
    }
    if (message.author.id !== message.guild.ownerID) {
        message.channel.send(`Only the server owner can change this setting! For more info about the setmodrole command, type: \`${SettingsTable.prefix} help-setmodrole\``)
        return;
    }
    try {
        var roleinserver = message.channel.guild.roles.find("name", modrole)
        if (!roleinserver) {
            throw `The role \`${modrole}\` doesnt exist in the server`;
        }
    } catch (err) {
        return message.channel.send(`${err}. Did you enter it correctly?`)
    }
    SettingsTable.modRole = modrole;
    client.settings.set(message.guild.id, SettingsTable)
    message.channel.send("The ModRole has been set to \`" + SettingsTable.modRole + "\` on this server!")

    message.guild.channels.find("name", SettingsTable.modLogChannel).send("The ModRole has been set to \`" + SettingsTable.modRole + "\` on this server by: " + message.author.toString())
}