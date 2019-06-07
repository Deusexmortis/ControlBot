const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

    const gachiData = [
            "AAAAAHHHHHH",
            "Fucking slaves.. Get your ass back here!",
            "SUCTION!",
            "**assClap**",
            ":gachiBASS: YO FORSEN WHATS UP ITS ME BILLY HARRINGTON, ANIKI. :gachiBASS: JUST GOT OFF A PLANE FROM GREECE, ITS WHY IM A LITTLE SUNTANNED RIGHT NOW. :gachiBASS:  JUST WANTED TO WISH YOU A HAPPY BIRTHDAY BUDDY. TAKE CARE!:gachiBASS:"
        ];

    const index = Math.round(Math.random() * (gachiData.length-1));
    message.channel.send(gachiData[index]);
};

exports.help = {
    name: "gachi"
};