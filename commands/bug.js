const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //message.delete();

    var text = args || `Geen.`;

    let bug = args.join(" ").slice(4);

    var bugKanaal = message.member.guild.channels.cache.get("780493845074542647");

    if (!bugKanaal) return message.channel.send("Kan de bug channel niet vinden.")


    const embed = new discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setColor("#0d8579")
        .setFooter(`Bugs`)
        .setDescription(bug)



    message.channel.send("Verzonden!");
    var bugKanaal = message.guild.channels.cache.find(ch => ch.name === "bugs");
    if (!bugKanaal) return message.guild.send("Kan het kanaal niet vinden");

    bugKanaal.send(embed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');
    });

}

module.exports.help = {
    name: "bug"
}