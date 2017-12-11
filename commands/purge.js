const Discord = require("discord.js");
const fs = require('fs');
const Jimp = require('jimp');
const Enmap = require('enmap');
const snekfetch = require('snekfetch')
module.exports = async (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const user = message.mentions.users.first();
    const amount =  parseInt(message.content.slice(SettingsTable.prefix.length + 6)) + 2
    if (!amount) return message.reply('Must specify an amount to delete!');
    message.channel.fetchMessages({
      limit: amount,
    }).then(messages => {
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      message.channel.send(`Deleted ${amount - 2} messages for you!`)
    })
}