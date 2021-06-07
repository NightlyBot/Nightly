const Discord = require("discord.js");
const package = require("../package.json");

module.exports = {
  name: "back",
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle("Update 1.2.6")
      .addField("Added Roblox Verfication with [RoVer](https://rover.link/)")
      .addField(
        "Added help command and verify command, reverify command is currently disabled"
      )
      .addField("Bug fixes and extra features")
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
  },
};
