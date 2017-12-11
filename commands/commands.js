const Discord = require("discord.js");
const fs = require('fs')
const Jimp = require('jimp')
const Enmap = require('enmap')
const snekfetch = require('snekfetch')
const moment = require('moment');
module.exports = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    message.channel.send("Loading...").then(msg => {
    var embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`Commands\nCommands can be used in the form of ${SettingsTable.prefix} (Command)\nWhen a command is not available Prysm will react with: ❌`)
    .addField("----Setup----", "To adjust Prysm to your liking")
    .addField("***setlogchannel***", "Sets the default channel where Prysm will dump its logs. For more info use the command: help-setlogchannel")
    .addField("***setmodrole***", "Sets the role which gives users acces to mod-commands. For more info use the command: help-setmodrole")
    .addField("***setprefix***", "Sets the default prefix for Prysm. For more info use the command: help-setprefix")
    .addField("***setwelcomemessage***", "Sets the welcomemessage for the server. For more info use the command: help-setwelcomemessage")
    .addField("***setwelcometrigger***", "Toggles the welcome-messages. For more info use the command: help-setwelcometrigger")
    .addField("***settings***", "Gives all the settings that has been set on the servers")
    .addField("----Mod----", "Mod-tools provided by Prysm")
    .addField("***purge***", "Deletes a certain number of messages in a channel. Usage: `purge (number which is ≤ 2)`")
    .addField("***kick***", "Kicks a user from your server. Usage: `kick (mentioned user)`")
    .addField("***ban***", "Bans a user from your server. Usage: `ban (mentioned user) (optional days to ban) (optional reason)`")
    .addField("----Tools----", "General tools to be used by everyone")
    .addField("***steamuser***", "Gives info about a steamuser based on its SteamID64. Usage `steamuser (steamID64)`")
    .addField("***invite***", "Gives you the invite link for Prysm.")
    .addField("***stats***", "A lot of stats about Prysm")
    .addField("***vote***", "Starts a vote for you.")
    .addField("----Fun----", "Commands to play around with")
    .addField("***meow***", "Gives you a random cat picture")
    .addField("***urban***", "Gives you info about a word from the urban dictionary. Usage: `urban word`")
    .addField("***belike***", "Puts you in a belikebill meme. Usage: `belike name,(f for female name and m for male name)`")
    msg.delete()
    message.channel.send(embed)
    });
}