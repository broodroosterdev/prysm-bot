const Discord = require("discord.js");
const fs = require('fs');
const Jimp = require('jimp');
const Enmap = require('enmap');
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports.run = (client, message, args) => {
    message.channel.send(`Pong! 🏓 The ping is \`${Math.round(client.ping)} Ms\``).then(msg =>{
        msg.react('🏓')
    })

}