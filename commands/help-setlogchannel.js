const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const embed = new Discord.RichEmbed()
    .setTitle("SetLogChannel")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x000000)
    .setDescription("To set the default channel where the bot will post the logs of all the actions fired.")
    .setThumbnail(client.user.avatarURL)
    .setFooter("Prysm-bot | @broodrooster 2017")
    .setTimestamp()
    .addField("Access", `All the members with the ${SettingsTable.modRole} role`)
    .addField("Usage",
    "\`" + SettingsTable.prefix + " setlogchannel !channel! \`")
    message.channel.send(embed)

}