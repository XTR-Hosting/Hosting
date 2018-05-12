const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var help = new Discord.RichEmbed()
.setTitle("General:")
.addField("**-Urban**", "This Will Show A Specified Words Definition According To Urban Dictionary!")
.addField("**-Invite**", "This Will Give You The Bots Invite Link!")
.addField("**-Help**", "This Will Gives A List Of All Available Commands!")
.addField("**-Botinfo**", "This  Will Give You Certain Details Of This Bot!")
.setColor("#FFB82B")
.setFooter("XTR-Bot made by Rain & xExtreme")
.setDescription("V.1 - XTR")
.setTitle("General Commands:");

//msg.channel.sendEmbed(help);
message.author.sendEmbed(help);
message.reply("Please check your DM");
//sendEmbed(help);
{


    var help = new Discord.RichEmbed()


.setColor("#FFB82B")
.setDescription("V.1.0 - XTR")
.setTitle("Admin Commands:")
.addField("**-Ban**", "This Will Ban A Mentioned User From Your Discord")
.addField("**-Clear**", "This Will Clear [X] Amount Of Messages In Bulk")
.addField("**-Kick**", "This Will Kick A Mentioned User From Your Discord")
.addField("**-Mute**", "This Will Restrict A User From Talking In Your Discord Server")
.addField("**-Report**", "This Will Log The Reported User In A Report Channel For A Server Admin To Then View!")

//msg.channel.sendEmbed(help);
message.author.sendEmbed(help);

//sendEmbed(help);
}};

module.exports.help = {
    name: "help"
  }