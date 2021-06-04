const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
//const { prefix } = require("./config.json");
const fs = require("fs");
require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

client.on("interaction", async (interaction) => {
  if (!interaction.isCommand()) return;
  var command = null;

  for (const file of commandFiles) {
    var cmd = require(`./commands/${file}`);

    if (cmd.name === interaction.commandName) {
      command = cmd;
    }
  }
  if (command !== null) {
    command.execute(interaction, client);
  }
});

client.once("ready", () => {
  client.application.commands.set([]);
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    const data = {
      name: `${command.name}`,
      description: `${command.description}`,
    };

    client.guilds.cache
      .get("839783309113556992")
      .commands.create(data)
      .catch((e) => {
        console.log(e);
      });
  }

  console.log(`Logged in as ${client.user.tag}`);

  const changingstatus = [
    `Nightly Version: ${package.version}`,
    `Watching Over ${client.guilds.cache.size} servers`,
  ];

  let index = 0;
  setInterval(() => {
    if (index === changingstatus.length) index = 0;
    const status = changingstatus[index];
    client.user.setActivity(status, { type: "PLAYING" }).catch(console.error);
    index++;
  }, 5000);
});

client.login(process.env.botoken);
