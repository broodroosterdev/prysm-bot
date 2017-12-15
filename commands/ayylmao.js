const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const { promisify } = require("util");
    const readdir = promisify(fs.readdir);
    const SettingsTable = client.settings.get(message.guild.id);
    message.channel.send("Loading...").then(msg => {
    var pics = [];
    const getimage = async function() {
        
    const picFiles = await readdir("./ayylmao/");
        picFiles.forEach(file => {
        pics.push(file)
        })
    };
    
    const sendimage = async function() {

    await getimage()
        var filepath = pics[Math.floor(Math.random() * pics.length)]
        var image = new Discord.Attachment(`./ayylmao/${filepath}`, "ayy-lmao.jpg")
        msg.delete()
        message.channel.send(`Ayy lmao`, image)
    };

    sendimage();

})
}