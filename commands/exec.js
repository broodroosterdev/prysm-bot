const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    var args = message.content.substring(SettingsTable.prefix.length + 5).split(/ +/g)
    if(message.author.id !== '236794128334061568') {
        message.react('❌') 
        return;
    }
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        if (evaled.length > 2000) {
            message.react('❌')
            return;
        }
    } catch(err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
    }

}