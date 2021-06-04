const Discord = require("discord.js");
const package = require('../package.json');
module.exports = {
	name: 'help',
	description: 'Displays useful information about the bot',
	execute(interaction, client) {
		const embed = new Discord.MessageEmbed()
		.setColor("#2F3136")
		.setTitle(":wave: Nightly")
		.addField('What is Nightly?','Nightly is an [](open source)')
		.setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomID('primary')
                .setLabel('shiny button')
                .setStyle('SUCCESS'),
			new Discord.MessageButton()
                .setCustomID('extra shiny button')
                .setLabel('another shiny button')
                .setStyle('DANGER'),
        );

     interaction.reply({ embeds: [embed],components: [row] });

	},
};