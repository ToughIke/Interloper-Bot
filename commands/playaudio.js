const fs = require("fs");

module.exports = {
  name: "playaudio",
  permissions: ["SEND_MESSAGES"],
  description: "plays the audio from the !record command!",

  async execute(message, args, cmd, client, Discord) {
    const voicechannel = message.member.voice.channel;
   if (!voicechannel) return message.channel.send("Please join a voice channel!");

   if (!fs.existsSync(`./recorded-${message.author.id}.pcm`)) return message.channel.send("Your audio is not recorded!");

   const connection = await message.member.voice.channel.join();
   const stream = fs.createReadStream(`./recorded-${message.author.id}.pcm`);

   const dispatcher = connection.play(stream, {
       type: "converted"
   });

   dispatcher.on("finish", () => {
       message.member.voice.channel.leave();
       return message.channel.send("finished playing audio");
   })

  }
};
