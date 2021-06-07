const Discord = require("discord.js");
const package = require('../package.json');
module.exports = {
	name: 'ping',
	category: "utility",
	permission: "ALL",
	description: `Displays Nightly's latency`,
	execute(interaction, client) {
		const embed = new Discord.MessageEmbed()
		.setColor("#2F3136")
		.setTitle(":ping_pong: Getting ping...	")
		.setDescription("Please wait...")
		.setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());
		interaction.reply(embed);

		const pingEmbed = new Discord.MessageEmbed()
		.setColor("#2F3136")
		.setTitle(":ping_pong: Pong!")
		.addField(`:robot: Latency:`, `${client.ws.ping}ms`)
		.setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());

		interaction.editReply(pingEmbed);

	},
};