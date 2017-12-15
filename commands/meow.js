const Discord = require("discord.js");
const fs = require('fs');
const Jimp = require('jimp');
const Enmap = require('enmap');
const snekfetch = require('snekfetch')
module.exports.run = async (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    message.channel.send("Loading...").then(msg => {
    snekfetch.get("http://random.cat/meow").then(webpage => {
        var imageurl = webpage.body.file
        var puns = [
            "Such nice cat",
            "Meooow",
            "Eat,sleep,meow,repeat",
            "Nyancat is the best dubstep.",
            "Cats have 9 lives. They dont respawn unfortunately.",
            "Making cats great again",
            "Broodrooster keeps me in his cage and wont let me out. Ples send help. -Prysm",
            "Furry friend",
            "Get a cat. Please",
            "Dont spam meow.",
            "Cats look the best when they have a slice of bread around their head",
            "Meeeeeooooooowww",
            "root@prysm: ~$ cat meow.jpg",
            "Feed your cats.",
            "You dont need to fall in love. You got cat-pics",
            "Send cats ples",
            "Stay paw-sitive",
            "prrrrrrr",
            "I need more cats",
            "I wish i had a cat..",
            "They like you i guess",
            "Cat is best",
            "According to 200 studies having a cat makes you way more attractive",
            "edbuisegbuiefgbuiregubiprgbuir -Cat",
            "aandacht....aandacht....AANDACHT",
            "Your daily dose of: weew cute",
            "But we got more...",
            "Cats dont vape. Theyre hella dope tho.",
            "Lemme meow"
        ];
            
            msg.edit(puns[Math.floor(Math.random() * puns.length)])
            message.channel.send({file: imageurl})
            
        })


    })
}