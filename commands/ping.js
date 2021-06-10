const Discord = require("discord.js");
const package = require("../package.json");
module.exports = {
  name: "ping",
  category: "utility",
  options: [],
  permission: "ALL",
  description: `Displays Nightly's latency`,
  execute(interaction, client) {
    const embed = new Discord.MessageEmbed()
      .setColor("#2F3136")
      .setTitle(":ping_pong: Getting ping...	")
      .setDescription("Please wait...")
      .setFooter(
        `Nightly ${package.build} ${package.version}`,
        client.user.displayAvatarURL()
      );

    process.env.TZ = "Etc/UTC";

    interaction.reply({ embeds: [embed] }).then(() => {
      const pingEmbed = new Discord.MessageEmbed()
        .setColor("#2F3136")
        .setTitle(":ping_pong: Pong!")
        .addField(`🤖 Bot Latency:`, `${client.ws.ping}ms`)
        .addField(
          `🌐 API Latency:`,
          `${Date.now() - interaction.createdTimestamp}ms`
        )
        .addField(`⌛ Database Latency:`, `N/A`)
        .setFooter(
          `Nightly ${package.build} ${package.version}`,
          client.user.displayAvatarURL()
        );

      interaction.editReply({ embeds: [pingEmbed] });
    });
  },
};
