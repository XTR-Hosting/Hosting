
const urban = require('relevant-urban')
    Discord = require('discord.js')

    module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.reply('***Please Specify some Text!***');
 
let res = await urban(args.join(' ')).catch(e => {
    return message.reply('**Sorry, Could Not Find A Definition!**');
});

const embed = new Discord.RichEmbed()
    .setColor("#FFB82B")
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(`**Defenition:**\n*${res.definition}*\n\nExample:\n*${res.example}*`)
    .addField('Author', res.author, true)
    .addField('Rating', `**\`Upvotes:  ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)  

if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {
    embed.addField('Tags', res.tags.join(', '), true)
}

message.channel.send(embed);

    }

    module.exports.help = {
        name: "urban"
      }
