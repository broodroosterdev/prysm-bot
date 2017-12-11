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
    if(!args[2]) {
        message.channel.send(`Please provide an valid prefix. For help on providing a valid prefix type: ${SettingsTable.prefix} help prefix`)
        return;
    }
    SettingsTable.prefix = args[2];
    client.settings.set(message.guild.id, SettingsTable);
    message.channel.send("The default prefix has been set to: ```\n" + SettingsTable.prefix + "\n``` ")
    



}