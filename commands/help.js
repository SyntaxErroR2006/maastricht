const discord = require("discord.js");  

module.exports.run = async(client, message, args) => {

    try{

        var embed = new discord.MessageEmbed()
        .setTitle("Help menu")
        .setDescription("De prefix voor deze server is: `-`")
        .setThumbnail(message.guild.iconURL({ size: 1024 }))
        .addField("Commands", "`new`")
        .addField("Fun Commands", "")
        .setFooter(`${message.author.username}`)
        .setColor("#2075d6")
        
        message.author.send(embed);

        message.reply("Alle commands vind je in je prive berichten! 🔏")

    }catch(error){
        message.reply("Er is iets foutsgelopen");
    }
    
}

module.exports.help = {
    name: "help"
}