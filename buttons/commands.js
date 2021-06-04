const Discord = require("discord.js");
const package = require('../package.json');
module.exports = {
	name: 'commands',
	execute(interaction, client) {
		const embed = new Discord.MessageEmbed()
		.setColor("#2F3136")
		.setTitle("hi")
		.setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());

        interaction.reply(embed);

	},
};