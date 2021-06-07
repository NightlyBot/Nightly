const Discord = require("discord.js");
const package = require("../package.json");

module.exports = {
  name: "back",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed();
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Update 1.2.6")
      .addField(
        "Whats New?",
        `Added Roblox Verification with RoVer\nAdded help command and verify command, reverify command is currently disabled`
      )
      .addField("Extras", "Bug fixes and extra features")
      .setFooter(
        `Nightly ${package.build} ${package.version}`,
        client.user.displayAvatarURL()
      );

    const row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setCustomID("back")
        .setLabel("Back")
        .setStyle("PRIMARY")
    );
    interaction.update({ embeds: [embed], components: [row] }).catch((e) => {
      console.log(e);
    });
  },
};
