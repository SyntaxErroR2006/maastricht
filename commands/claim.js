const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var claimEmbed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
        .setDescription("Dit ticket is geclaimed! Niet meer bemoeien.")
        .setColor("#45f542")

    return message.channel.send(claimEmbed);
}

module.exports.help = {
    name: "claim"
}