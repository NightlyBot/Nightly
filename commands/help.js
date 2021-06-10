const Discord = require("discord.js");
const package = require("../package.json");
module.exports = {
  name: "help",
  category: "misc",
  options: [],
  permission: "ALL",
  description: "Displays useful information about the bot",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Nightly")
      .addField(
        "What is Nightly?",
        "Nightly is an [open source](https://github.com/NightlyBot/Nightly) discord bot!"
      )
      .addField(
        "How do I view a list of commands?",
        "You can click the `Commands` button below"
      )
      .addField("Nightly Version:", package.version)
      .setFooter(
        `Nightly ${package.build} ${package.version}`,
        client.user.displayAvatarURL()
      );

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setCustomID("commands")
        .setLabel("Commands")
        .setStyle("PRIMARY"),
      new Discord.MessageButton()
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`
        )
        .setLabel("Invite")
        .setStyle("LINK"),
      new Discord.MessageButton()
        .setURL("https://github.com/NightlyBot/Nightly")
        .setLabel("GitHub")
        .setStyle("LINK")
    );

    interaction.reply({ embeds: [embed], components: [row] });
  },
};
