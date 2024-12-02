require("dotenv").config();

const Discord = require("discord.js");
const keep_alive = require('./keep_alive.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log("Ready!");

  // Set the bot's status to Do Not Disturb (DND) and display "/look" as a custom status
  client.user.setPresence({
    activities: [{
      name: "/look", // The custom status message
      type: "WATCHING", // This can be any activity type like "PLAYING", "WATCHING", etc. "WATCHING" is a common choice for status-like displays.
    }],
    status: "dnd", // Set the bot's status to Do Not Disturb
  }).catch(console.error);
});

client.on("message", async (message) => {
  if (message.content.includes("bruh")) {
    try {
      await message.react("🇧");
      await message.react("🇷");
      await message.react("🇺");
      await message.react("🇭");
    } catch (error) {
      console.error("One of the emojis failed to react.");
    }
  }

  if (message.content.includes("lmao")) {
    message.react("😂");
  }

  if (message.content.includes("oof")) {
    message.react("753386121123201164");
  }

  if (message.content.includes("rip")) {
    message.react("754217664808878141");
  }

  if (
    message.channel.id === "757708878203977888" &&
    message.content == "oof among_us"
  ) {
    var targetMember = message.get(message.author);
    message.reply("What is the game code?...");

    message.channel
      .awaitMessages((m) => m.author.id == message.author.id, {
        max: 1,
        time: 30000,
      })
      .then((collected) => {
        var gameCode = collected.first().content;
        if (collected.first().content.length() <= 6) {
          const embedMsg = new Discord.MessageEmbed()
            .setTitle("Among Us Game")
            .setDescription(
              targetMember +
                " hosted an Among Us Game\nJoin the game: `" +
                gameCode +
                "`"
            )
            .setTimestamp();

          message.channel.send(embedMsg);
        } else {
          message.reply("That is not a valid code");
        }
      })
      .catch(() => {
        message.reply("No answer after 30 seconds, operation canceled.");
      });
  }
});

// Run the bot with your token (make sure to keep your token secure)
client.login(token);
