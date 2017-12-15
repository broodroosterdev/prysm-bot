const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const embed = new Discord.RichEmbed()
    .setTitle("SetWelcomeMessage")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x000000)
    .setDescription("To set the message when a user joins your server")
    .setThumbnail(client.user.avatarURL)
    .setFooter("Prysm-bot | @broodrooster 2017")
    .setTimestamp()
    .addField("Access", `All the members with the ${SettingsTable.modRole} role`)
    .addField("Usage",
    "The \`*\` is an placeholder for the name of the joined user.\n \`" + SettingsTable.prefix + " setwelcomemessage !Welcome*Message!\`")
    message.channel.send(embed)

}