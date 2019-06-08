const Discord = require('discord.js');
const fs = require('fs');
const enmap = require('enmap');
require('dotenv-flow').config();
const client = new Discord.Client();
client.commands = new enmap();

fs.readdir('./Events/', async (err, files) => {
    console.log('\n' + `---LOADING EVENTS---`);
    console.log(`de err is: ${err}`)
    console.log(`de files is:  ${err}`)
    //if (err) return console.error;
    console.log("_____________________")
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`${evtName}`);
        client.on(evtName, evt.bind(null, client));
    });
}).catch(console.error);

fs.readdir('./commands/', async (err, files) => {
    console.log('\n' + `---LOADING COMMANDS---`);
    if (err) return console.error;
    console.log("_____________________")
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`${cmdName}`);
        client.commands.set(cmdName, props);
    });
});

client.login();