const botconfig = require("./botconfig.json");
const tokenfile = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client();
const urban = require('relevant-urban');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

client.on('message', message => {
  if(message.content.startsWith("-clear")) {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Incorrect usage! **-clear args**");
  if(!args[0]) return message.reply("Incorrect usage! **-clear args**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
  })
  }})

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commaznds.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`${bot.guilds.size} Servers!`);

});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args)
});


bot.login("NDI0MzE2NzUyNTM3ODQ1Nzcw.DZB6dg.xuIKoYrOkxYXoAm5k8YXlXtenIE");
