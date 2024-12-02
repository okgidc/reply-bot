require("dotenv").config();
const { Client, ActivityType } = require("discord.js");
const keep_alive = require('./keep_alive.js');

const client = new Client();

const token = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log("Bot is online!");

  // Set the custom status to "Watching /look" and DND mode
  client.user.setPresence({
    activities: [
      {
        name: "/look",
        type: ActivityType.Watching,
      }
    ],
    status: 'dnd',
  });
});

// Login to Discord
client.login(token);
