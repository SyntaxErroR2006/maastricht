const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //message.delete();



    var text = args || `Geen.`;

    let suggestie = args.join(" ").slice(10);

    var suggestieKanaal = message.member.guild.channels.cache.get("780493847112712202");

    if (!suggestieKanaal) return message.channel.send("Kan de suggestie channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setFooter(`Suggesties`)
        .setColor("#0d8579")
        .setDescription(suggestie)

    message.channel.send("Verzonden!");
    var suggestieKanaal = message.guild.channels.cache.find(ch => ch.name === "suggesties");
    if (!suggestieKanaal) return message.guild.send("Kan het kanaal niet vinden");

    suggestieKanaal.send(embed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');
    });



}

module.exports.help = {
    name: "suggestie"
}