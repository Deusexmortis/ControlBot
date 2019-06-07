const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

    await message.delete().catch(console.error);
    let path = message.guild.members;
    function getRoleData(rolename) {
        let roledata = message.guild.roles.find(r => r.name === `${rolename}`);
        return roledata.id};
    function nameSeperate(rawNames) {
        spacedNames = rawNames.map(m=> {
            let name = m.user.tag.split("#");
            name.pop();
            return name
            }).join('\n')
        if(!spacedNames) {spacedNames = "'none'"}else{console.error};
        return spacedNames};

    // Create role ID from role name
    let raidID = getRoleData("Raider"); //"580987158228369450";
    let tankID = getRoleData("Tank"); //"580957529098551297";
    let healerID = getRoleData("Healer"); //"580957005062209536";
    let dpsID = getRoleData("DPS"); //"580983983635038208";

    // Get player data with certain roles
    let raiders = path.filter(x => x.roles.has(raidID));
    let tank_raiders = path.filter(x => x.roles.has(raidID) && x.roles.has(tankID));
    let healer_raiders = path.filter(x => x.roles.has(raidID) && x.roles.has(healerID));
    let dps_raiders = path.filter(x => x.roles.has(raidID) && x.roles.has(dpsID));

    let embed = new RichEmbed()
        .setTitle("Current Roster")
        //.setThumbnail('https://i.ibb.co/vxd03Pp/Roster.png')
        .setDescription(`An overview of the current raiding roster, including benched players.\nTotal amount of current raiders: ${raiders.size}`)

        // Importing role data into richembed
        .addField(`Tanks (${tank_raiders.size}):`, `${nameSeperate(tank_raiders)}`, true)
        .addField(`Healers (${healer_raiders.size}):`, `${nameSeperate(healer_raiders)}`, true)
        .addField(`DPS (${dps_raiders.size}):`, `${nameSeperate(dps_raiders)}`, true)

        .setFooter(`Requested by: ${message.member.user.tag}`)
        .setTimestamp()
        .setColor('#ff0033');
    message.channel.send(embed);
};

exports.help = {
    name: "roster"
};