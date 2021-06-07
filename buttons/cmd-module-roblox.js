const Discord = require("discord.js");
const package = require("../package.json");

module.exports = {
  name: "cmd-module-roblox",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Roblox Commands")
      .addField("verify", "Links your Roblox account to this server", true)
      .addField(
        "reverify (*temporarily disabled*)",
        "Links another Roblox account to this server",
        true
      )

      .setFooter(
        `Nightly ${package.build} ${package.version}`,
        client.user.displayAvatarURL()
      );

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setCustomID("cmd-module-back")
        .setLabel("Back")
        .setStyle("PRIMARY")
    );

    interaction.update({ embeds: [embed], components: [row] }).catch((e) => {
      console.log(e);
    });
  },
};
