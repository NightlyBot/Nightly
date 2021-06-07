const Discord = require("discord.js");
const package = require("../package.json");

module.exports = {
  name: "back",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Update 1.1.6")
      .addField("Whats New?", "Added ping command")
      .addField("Extras", "Bug fixes and optimization updates")
      .setFooter(
        `Nightly ${package.build} ${package.version}`,
        client.user.displayAvatarURL()
      );

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setCustomID("next")
        .setLabel("Next Page")
        .setStyle("PRIMARY")
    );
    interaction.update({ embeds: [embed], components: [row] }).catch((e) => {
      console.log(e);
    });
  },
};
