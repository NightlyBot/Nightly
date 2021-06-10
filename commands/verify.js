const Discord = require("discord.js");
const package = require("../package.json");
module.exports = {
  name: "verify",
  category: "roblox",
  options: [],
  permission: "ALL",
  description: "Links your Roblox account to the current server",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Verification")
      .addField(
        "How do I verify?",
        "To verify your Roblox account, choose a method below"
      )
      .addField(
        "What method should I use?",
        "You should use whichever method you are most familiar with"
      )
      .addField(
        "Why should I verify?",
        "Verifying will give you access to this server"
      )
      .addField("RoVer Method:", "This method will verify you using RoVer")
      .addField(
        "Bloxlink Method:",
        "This method will verify you using Bloxlink (*currently disabled*)"
      )
      .setFooter(
        `Nightly ${package.build} ${package.version}`,
        client.user.displayAvatarURL()
      );

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setCustomID("verify-rover")
        .setLabel("RoVer")
        .setStyle("PRIMARY"),
      new Discord.MessageButton()
        .setCustomID("verify-bloxlink")
        .setLabel("Bloxlink")
        .setStyle("SECONDARY")
    );

    interaction.reply({ embeds: [embed], components: [row] });
  },
};
