module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "This command kicks a member!",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.memberTarget.send("You have been kicked from the ASC Discord")
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You couldn't kick that member!`);
        }
    }
}