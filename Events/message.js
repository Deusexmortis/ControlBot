const { prefix } = require('../config.js');

module.exports = (client, message) => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    if(command=="gachi") {
        if(typeof lastIndex == "undefined") {
            cmd.run(client, message, null).then(x => lastIndex = x)
            gachiCounter = true
        }else{
            cmd.run(client, message, lastIndex).then(x => lastIndex = x)
        }
    return}

    cmd.run(client, message, args);

};