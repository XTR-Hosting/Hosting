const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  var invite = new Discord.RichEmbed()

  .setColor("#FFB82B")
  .addField("**BOT AUTHENTICATION**", "**https://discordapp.com/oauth2/authorize?client_id=424316752537845770&permissions=8&scope=bot**")
  
  message.author.send(invite);
message.reply("**Our bot authentication has been sent to your DM!**");
}
    module.exports.help = {
    name: "invite"
  }