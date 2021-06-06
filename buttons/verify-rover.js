const Discord = require("discord.js");
const package = require("../package.json");
const requests = require("requests");

module.exports = {
  name: "verify-rover",
  execute(interaction, client) {
    if (interaction.message.interaction.user.id === interaction.user.id) {
      const embed = new Discord.MessageEmbed()
        .setColor("#2F3136")
        .setTitle(`Verification`)
        .setDescription(
          `To gain access to this server, please complete the steps below`
        )
        .addField(`1) Go to https://verify.eryn.io`, `󠀀`)
        .addField(`2) Login to your Discord account`, `󠀀`)
        .addField(`3) Follow the steps on the RoVer website`, `󠀀`)
        .addField(`4) Press the \`Verify\` button below`, `󠀀`)
        .setFooter(
          `Nightly ${package.build} ${package.version}`,
          client.user.displayAvatarURL()
        );

      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setCustomID("verify-check-rover")
          .setLabel("Verify")
          .setStyle("PRIMARY"),
        new Discord.MessageButton()
          .setCustomID("verify-cancel")
          .setLabel("Cancel")
          .setStyle("DANGER")
      );

      interaction.update({ embeds: [embed], components: [row] });
    }
  },
};
