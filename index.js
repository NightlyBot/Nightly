const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
const package = require('./package.json');
const fs = require("fs");
require("dotenv").config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Discord.Collection();
client.buttons = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

const buttonFiles = fs
  .readdirSync("./buttons")
  .filter((file) => file.endsWith(".js"));

client.on("interaction", async (interaction) => {
  if (!interaction.isCommand()) return;

  for (const file of commandFiles) {
    var cmd = require(`./commands/${file}`);

    if (cmd.name === interaction.commandName) {
      if (cmd.permission === "ALL") { 
      cmd.execute(interaction, client);
      } else {
        if (interaction.member.permissions.has(cmd.permission) === true) {
          cmd.execute(interaction, client);
        } else {
          const embed = new Discord.MessageEmbed()
		        .setColor("#2F3136")
		        .setTitle(":x: Invalid Permission Level")
		        .setDescription("You do not have high enough permissions to execute this command")
		        .setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());
		        interaction.reply(embed);
        }
      }
    }
  }
});

client.on("interaction", async (interaction) => {
  if (!interaction.isMessageComponent() && interaction.componentType !== 'BUTTON') return;

  for (const file2 of buttonFiles) {
    var btn = require(`./buttons/${file2}`);
    if (btn.name === interaction.customID) {
      btn.execute(interaction, client);
    }
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
  
});

const changingstatus = [
  `Nightly`, 
  `${client.users.cache.size} Users`
];

let index = 0;
setInterval(() => {
  if (index === changingstatus.length) index = 0;
  const status = changingstatus[index];
  client.user.setActivity(status, { type: "WATCHING" });
  index++;
}, 5000);


client.login(process.env.TOKEN);
