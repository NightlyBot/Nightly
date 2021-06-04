const Discord = require("discord.js");
const package = require('../package.json');
module.exports = {
	name: 'help',
	description: 'Displays useful information about the bot',
	execute(interaction, client) {
		const embed = new Discord.MessageEmbed()
		.setColor("#2F3136")
		.setTitle(":ping_pong: Getting ping...	")
		.setDescription("Please wait...")
		.setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomID('primary')
                .setLabel('primary')
                .setStyle('SUCCESS'),
        );

     interaction.reply({ embeds: [embed],components: [row] });

	},
};