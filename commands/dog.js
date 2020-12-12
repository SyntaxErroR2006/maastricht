const discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    let doggo = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json.message);

    // anthony#8577
    var embed = new discord.MessageEmbed()
    .setAuthor(message.member.user.tag, message.member.user.avatarURL)
        .setColor(0xdd2423)
        .setImage(doggo)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`A random dog!!`)
        .setTimestamp();

    message.channel.send(embed);

};

exports.help = {
    name: "dog"
}