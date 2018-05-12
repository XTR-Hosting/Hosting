const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.reply("Incorrect usage! **-kick @player reason** ");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Not enough perms!");
if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

let kickEmbed = new Discord.RichEmbed()
.setDescription("~Kick~")
.setColor("#FF0000")
.addField("Kicked User", `${kUser} with ID ${kUser.id}`)
.addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
.addField("Kicked In", message.channel)
.addField("Tiime", message.createdAt)
.addField("Reason", kReason);

let kickChannel = message.guild.channels.find(`name`, "incidents", "kicked");
if(!kickChannel) return message.channel.send("Can't find kicked channel.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
  }