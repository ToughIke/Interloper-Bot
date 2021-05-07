module.exports = {
    name: 'ban',
    permissions: ["MANAGE_MESSAGES", "MANAGE_CHANNELS"],
    description: "This command bans a member!",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.memberTarget.send("You have been banned from the ASC Discord. Contact ToughIke#7551 for more information.")
            message.channel.send("User has been banned");
        }else{
            message.channel.send(`You couldn't ban that member!`);
        }
    }
}