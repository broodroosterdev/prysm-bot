const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const embed = new Discord.RichEmbed()
    .setTitle("SetModRole")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x000000)
    .setDescription("To set which roles have the permission to execute mod-specific commands")
    .setThumbnail(client.user.avatarURL)
    .setFooter("Prysm-bot | @broodrooster 2017")
    .setTimestamp()
    .addField("Access", `The owner of the server only. This is done for security reasons.`)
    .addField("Usage",
    "\`" + SettingsTable.prefix + " setmodrole !name! \`")
    message.channel.send(embed)

}