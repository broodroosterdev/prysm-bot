const Discord = require("discord.js");
const fs = require('fs');
const Jimp = require('jimp');
const Enmap = require('enmap');
const snekfetch = require('snekfetch')
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    searchterm = message.content.slice(SettingsTable.prefix.length + 8).split(",");
    message.channel.send("Loading...").then(msg => {
    if(!searchterm) {
        message.channel.send("You need to provide a name!")
        msg.delete()
        return
    }
    snekfetch.get(`http://belikebill.azurewebsites.net/billgen-API.php?default=1&name=${searchterm[0]}&sex=${searchterm[1]}`).then(summariesresponse => {
            var imagebuffer = summariesresponse.body
    Jimp.read(imagebuffer).then(function (image) {
        image.write("belike.jpg")
    })
    
    setTimeout(function() {
        var image = new Discord.Attachment("belike.jpg", "y-u-look-at-this.jpg")
        msg.delete()
        message.channel.send(`Be like **${searchterm[0]}**`, image)
        }, 2000)
    })
    })
}