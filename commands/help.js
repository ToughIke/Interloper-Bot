const {Client, RichEmbed} = require('discord.js');
module.exports = {
    name: 'help',
    permissions: ["SEND_MESSAGES"],
    description: "this is a help command!",
    execute(message, args, cmd, client, Discord){
        var newEmbed = new Discord.MessageEmbed()
        .setColor('#3525d3')
        .setTitle('Bot Commands')
        .setDescription('This is a list of bot commands')
        .addFields(
            {name: 'Kick', value: '-kick'},
            {name: 'Ban', value: '-ban'},
            {name: 'Clear', value: '-clear'},
            {name: 'Music Bot', value: 'do -play when in a vc'},
            {name: 'Record', value: '-record'},
            {name: 'Server Information', value: '-serverinfo'},
            {name: 'Deep Fry', value: '-deepfry'},
            {name: 'User Info', value: '-userinfo'},
            {name: 'Server Member Stats', value: '-stats'},
            {name: 'Google Image Search', value: '-image (search)'},
            {name: 'Wikipedia Search', value: '-wiki (search)'}
        )
        .setFooter('Contact ToughIke#7551 for bot suggestions');

        message.author.send(newEmbed);
    }
}