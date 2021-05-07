module.exports = {
    name: 'clear',
    permissions: ["MANAGE_CHANNELS"],
    description: "Clear messages!",
   async  execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.channel.send("Please enter the amount of messages to clear!");
 
        if(isNaN(args[0])) return message.channel.send("That isn't a fucking number dumbass!");
 
        if(args[0] > 100) return message.channel.send("You can't remove more than 100 messages!");
        
        if(args[0] < 1) return message.channel.send("You have to delete at least one message!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}  