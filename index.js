

/*
Prysmbot by broodrooster-dev
Prysmbot is a discord-bot designed for any server.
Due to the loads of commands Prysm will always be there to help you.
*/
//Loading Libs
const Discord = require("discord.js");
const { promisify } = require("util");
var client = new Discord.Client();
const fs = require('fs');
const Jimp = require('jimp');
const moment = require('moment');
const snekfetch = require('snekfetch');
const readdir = promisify(fs.readdir);
client.log = require('./functions/log.js');
client.clean = require('./functions/clean.js');
client.ishigherthan = require('./functions/ishigherthan.js');
client.log("Log", "Loaded Client", "StartUp");
client.log("Log", "Loaded the modules", "StartUp");

//ENmap bende
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const SettingsProvider = new EnmapLevel({ name: "ServerSettings", persistent: true });
client.settings = new Enmap({ provider: SettingsProvider });
client.log("Log", "Loaded the Enmap", "StartUp");

//Loading config
client.config = require('./config.json');
client.log("Log", "Loaded the config files", "StartUp");

//Loading Commands
client.commands = new Discord.Collection();
const load = async () => {
    const cmdFiles = await readdir("./commands/");
        cmdFiles.forEach(file => {
            try {
                const f = require(`./commands/${file}`);
                if (file.split(".").slice(-1)[0] !== "js") return; //If its not a .js file it wont load it
                client.commands.set(file.split(".")[0], f);
            } catch  (e){
                client.log("Error", `Error in command ${file}\n${e.stack} `, "Error")
            }
        })

const evtFiles = await readdir("./events/");
    evtFiles.forEach(file => {
        const evtName = file.split(".")[0]
        const event = require(`./events/${file}`)
        client.on(evtName, event.bind(null, client))
        delete require.cache[require.resolve(`./events/${file}`)];
        console.log(evtName)
})
};

//Logging into the API
client.login(client.config.token);//
client.log("Log", "Logged into the API", "StartUp");
load();