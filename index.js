const express = require("express");
const app = express();

app.listen(process.env.PORT || 2000, () => {
  console.log('Your app is listening on port ' + (process.env.PORT || 2000));
  console.log("I'm Ready To Work..! 24H");
});

app.get('/', (req, res) => {
  res.send(`
    <body>
      <center><h1>Bot 24H ON!</h1></center>
    </body>
  `);
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate:false}); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
});

// ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
  setInterval(async () => {
    try {
      const channel = await client.channels.fetch(process.env.channel);
      const VoiceConnection = joinVoiceChannel({
        channelId: channel.id,
        guildId: process.env.guild,
        selfMute: true,
        selfDeaf: true,
        adapterCreator: channel.guild.voiceAdapterCreator
      });
    } catch (error) {
      console.error('Error joining voice channel:', error);
    }
  }, 1000);
});

client.login(process.env.token);
