const Discord = require("discord.js");
const package = require('../package.json');

module.exports = {
	name: 'commands',
	execute(interaction, client) {
		const embed = new Discord.MessageEmbed()
		.setColor("#2F3136")
		.setTitle("Command Modules")
        .addField("Utility","Utility Commands",true)
        .addField("Roblox","Roblox Commands",true)
        .addField("Moderation","Moderation Commands",true)
        .addField("Misc","Misc Commands",true)
		.setFooter(`Nightly ${package.build} ${package.version}`,client.user.displayAvatarURL());

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomID('cmd-module-utility')
                .setLabel('Utility')
                .setStyle('PRIMARY'),
            new Discord.MessageButton()
                .setCustomID('cmd-module-roblox')
                .setLabel('Roblox')
                .setStyle('PRIMARY'),
            new Discord.MessageButton()
                .setCustomID('cmd-module-moderation')
                .setLabel('Moderation')
                .setStyle('PRIMARY'),
            new Discord.MessageButton()
                .setCustomID('cmd-module-misc')
                .setLabel('Misc')
                .setStyle('PRIMARY'),
			
        );

        interaction.update({ embeds: [embed], components: [row] }).catch((e) => {console.log(e)});

	},
};