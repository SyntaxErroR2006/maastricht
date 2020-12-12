const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

var reden = args.slice(3).join(" ");

var channel = message.member.guild.channels.cache.get("781155983229321226");

var messageArray = message.content.split(" ");

var botEmbed = new discord.MessageEmbed()
        .setTitle("Staffwarn")
        .setDescription(`**ROBLOX Naam:** ${messageArray[1]}\n**Moderator:** ${message.author.username}\n**Staffwarn:** ${messageArray[3]}\n**Reden:** ${reden}`)
        .setFooter("Gegeven op:")
        .setTimestamp()

        if (args[1] == null) {

            var embed = new discord.MessageEmbed()
                .setColor("#3789c4")
                .setDescription(`Geef een ROBLOX Naam op, **${message.author.username}**`);
        
            return message.reply(embed);
        
        }

        if (args[2] == null) {

            var embed = new discord.MessageEmbed()
                .setColor("#3789c4")
                .setDescription(`Geef een reden op, **${message.author.username}**`);
        
            return message.reply(embed);
        
        }

        var embed = new discord.MessageEmbed()
        .setColor("#3789c4")
        .setDescription(`Succesvol gestuurd, **${message.author.username}**`);

    message.reply(embed);

        return channel.send(botEmbed);
}

module.exports.help = {
    name: "staffwarn"
}