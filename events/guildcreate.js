const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports = (client, guild) => {
    const defaultSettings = {
        prefix: "p*",
        modLogChannel: "mod-log",
        modRole: "Prysm-Mod",
        welcomeMessage: "Say hello to *, everyone! We all need a warm welcome sometimes :D",
        welcomeTrigger: false
      }
    client.settings.set(guild.id, defaultSettings);

    



}