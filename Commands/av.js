const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    
    //await message.delete().catch(console.error);

    userID = message.mentions.users.first()
    memberID = message.guild.members.get(userID.id)

    console.log(userID)
    console.log(memberID)

    let embed = new RichEmbed()
        .setDescription(`Avatar of:\n @${userID.tag}`)
        .setImage(userID.avatarURL)
        
        .setFooter(`Requested by: ${message.author.tag}`)
        //.setTimestamp()
        .setColor(memberID.highestRole.color);
    message.channel.send(embed);
};

exports.help = {
    name: "av"
};