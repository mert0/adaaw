const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#ffdf00")
  .setTitle("Senin Kedin Olsunmu Gızzz ? :cat:")
  .setImage(body.file);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "kedi"
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'Rasgele kedi resim atar..',
  usage: 'kedi'
};
