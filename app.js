const Discord = require('discord.js');
const fs = require('fs');
const enmap = require('enmap');
require('dotenv-flow').config();
const client = new Discord.Client();
client.commands = new enmap();

fs.readdir('./Events/', async (err, files) => {
    console.log('\n' + `---LOADING EVENTS---`);
    //if (err) return console.error;
    console.log("_____________________")
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./Events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`${evtName}`);
        client.on(evtName, evt.bind(null, client));
    });
});

fs.readdir('./Commands/', async (err, files) => {
    console.log('\n' + `---LOADING COMMANDS---`);
    //if (err) return console.error;
    console.log("_____________________")
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./Commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`${cmdName}`);
        client.commands.set(cmdName, props);
    });
});

client.login();