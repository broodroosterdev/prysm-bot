const Discord = require("discord.js");
const fs = require('fs');
const Jimp = require('jimp');
const Enmap = require('enmap');
const snekfetch = require('snekfetch')
module.exports.run = (client, message, args) => {
    const SettingsTable = client.settings.get(message.guild.id);
    message.channel.send("Please provide a question for the vote. I will abort after 30 seconds so you better be quick!").then(msg => {
    const collector = message.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 30000});
    collector.on('collect', collected => { // When a message is collected, this event triggers.
        if(collected.content.endsWith("?")) { // If response is 'no'
        global.question = collected.content
        collector.stop(); // Stop the collector.
        
        }else if(!collected.content.endsWith("?")) { // If response is 'yes'
        global.question = collected.content + "?"
        collector.stop(); // Stop the collector.
        
        }
      })
      collector.on('end', collected => { // When the 30 seconds runs out.
        if(collected.size < 1) return message.channel.send('Dont waste my time please.'); // If no response, send a message.
        msg.delete()
        message.channel.send(`***${global.question}*** You can vote by typing \`vote yes\` or \`vote no\`. After 5 minutes the vote will be closed. You can also stop the vote by typing: \`vote stop\``).then(async vote => {
        const votecollector = message.channel.createMessageCollector(m => m.channel.id === message.channel.id, {time : 300000});
        var yes = 0
        var no = 0
        var voters = [];
        votecollector.on('collect', collected => {
            if(collected.content.toLowerCase() === "vote stop"){
                if(collected.author.id === message.author.id) votecollector.stop();
                if(!collected.author.id === message.author.id) message.channel.send("Only the creator of the vote can stop it. Im sorry..")
                return
            }
            if(collected.content.toLowerCase() === "vote yes"){
                if(voters.indexOf(collected.author.tag) > -1){
                    message.channel.send("You can only vote once!")
                    return
                }
                yes = yes + 1
                collected.reply("Thank you for voting!")
                voters.push(collected.author.tag)
            }
            if(collected.content.toLowerCase() === "vote no"){
                if(voters.indexOf(collected.author.tag) > -1){
                    message.channel.send("You can only vote once!")
                    return
                }
                no = no + 1
                collected.reply("Thank you for voting!")
                voters.push(collected.author.tag)                
            }
        })
        votecollector.on('end', collected => {
            if(!voters[0]) return message.channel.send(`Nobody voted... Better luck next time!`)
            message.channel.send(`The vote for: ***${global.question}*** has resulted into ${yes} votes for yes and ${no} votes for no.\nThese were the voters:\`\`\`${voters.join("\n")}\`\`\``)
        })
    }) 
    })
    })
}