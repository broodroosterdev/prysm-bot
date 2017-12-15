const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    message.channel.send("Loading...").then(msg => {
    const usedmem = process.memoryUsage().heapUsed / 1024 / 1024;
    var embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField("Memory",`${Math.round(usedmem * 100) / 100} MB`)
    .addField("Uptime", `${moment().startOf('day').milliseconds(client.uptime).format('DD [Days] HH [Hours] mm [Minutes] ss [Seconds]')}`)
    .addField("Ping", `${Math.round(client.ping)} Ms`)
    .addField("Total users", `${client.users.size} users`)
    .addField("Total Guilds", `${client.guilds.size}`)
    msg.delete()
    message.channel.send(embed)
    });
}