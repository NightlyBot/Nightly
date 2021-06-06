const Discord = require("discord.js");
const package = require("../package.json");
const requests = require("requests");

module.exports = {
  name: "verify-check-rover",
  execute(interaction, client) {
    console.log("good")
    if (interaction.message.interaction.user.id === interaction.user.id) {
    console.log("good")
      requests(`https://verify.eryn.io/api/user/${interaction.member.id}`, {})
        .on("data", function (chunk) {
        chunk = JSON.parse(chunk);
          if (chunk.status === "ok") {

            const embed1 = new Discord.MessageEmbed()
            .setColor("#2F3136")
            .setTitle(`Verified!`)
            .setDescription(
              `You have been verified with RoVer!`
            )
            .setFooter(
              `Nightly ${package.build} ${package.version}`,
              client.user.displayAvatarURL()
            );

            const embedErr1 = new Discord.MessageEmbed()
            .setColor("#2F3136")
            .setTitle(`Could not verify!`)
            .setDescription(
              `An error occurred when trying to verify you!`
            )
            .setFooter(
              `Nightly ${package.build} ${package.version}`,
              client.user.displayAvatarURL()
            );

            interaction.update({ embeds: [embed1], components: [] });

            var role = interaction.member.guild.roles.cache.find(role => role.name === "Verified");
            interaction.member.roles.add(role).catch((e) => {(interaction.update({ embeds: [embedErr1], components: [] }))})

            interaction.member.setNickname(chunk.robloxUsername).catch((e) => {})

          } else {
            const embed1 = new Discord.MessageEmbed()
            .setColor("#2F3136")
            .setTitle(`Unverified`)
            .setDescription(
              `You are not verified with RoVer, please verify and try again.`
            )
            .setFooter(
              `Nightly ${package.build} ${package.version}`,
              client.user.displayAvatarURL()
            );
  
            interaction.update({ embeds: [embed1], components: [] });
          }
        })
        .on("end", function (err) {
          if (err) {
          const embedErr = new Discord.MessageEmbed()
          .setColor("#2F3136")
          .setTitle(`Uh oh! An error has occured`)
          .setDescription(
            `We were unable to confirm if you were verified or not, please try again later.`
          )
          .setFooter(
            `Nightly ${package.build} ${package.version}`,
            client.user.displayAvatarURL()
          );

          interaction.update({ embeds: [embedErr], components: [] })};
        });
    }
  },
};
