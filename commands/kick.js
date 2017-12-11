const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    const ModRole = message.guild.roles.find("name", SettingsTable.modRole)
    if(ModRole === null) {
        message.channel.send(`Please first set the ModRole correctly. For help setting it up please type: \`\`\`${SettingsTable.prefix} help set\`\`\``)
        return;
    }
    const Modrole = ModRole.id
    if(!message.member.roles.has(Modrole)) return;
    const user = message.mentions.members.first();
    if (!user) return message.reply("Please specify a user to kick.")
    if(client.ishigherthan(client, user, message) == false) return message.reply("This user is too high for me to kick. Please put me higher or the user you want to kick lower in the role tab")
    const reason = message.content.slice(SettingsTable.prefix.length + 4 + 24)
    var because = ``
    if(reason){
        because = ` because ${reason}.`
    } else {
        because = `.`
    }
    user.kick({
        reason: reason
      })
    message.channel.send(`How sad... ${user.toString()} has just been kicked${because}`)
}