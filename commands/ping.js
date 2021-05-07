module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('pong!');
    }
}