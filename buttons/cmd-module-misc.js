const Discord = require("discord.js");
const package = require("../package.json");

module.exports = {
  name: "cmd-module-misc",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Misc Commands")
      .addField("help", "Displays a list of commands", true)
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
