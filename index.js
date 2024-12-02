require("dotenv").config();

const { Client, GatewayIntentBits } = require('discord.js');
const keep_alive = require('./keep_alive.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Ready!");
  client.user.setStatus("dnd"); // Set status to Do Not Disturb
  client.user.setActivity("/look", { type: "PLAYING" }); // Set activity to "/look"
});

client.login(process.env.BOT_TOKEN);
