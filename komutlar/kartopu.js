const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
let user = message.mentions.users.first();
  if(!user) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setDescription(`Kartopu atacağın kişiyi etiketlemelisin!`).setColor("#ab0000"));
  if (user.id === message.author.id) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setDescription(`Kendinemi kartopu atıcan?!`).setColor("#ab0000"));

  {
        var gif = [
        'https://media3.giphy.com/media/6eDkkWCzqgSg8/giphy.gif?cid=790b76115d39cd784b6a6a757395ae89&rid=giphy.gif', 'https://media3.giphy.com/media/lI9vcjXROJM7S/giphy.gif?cid=790b76115d39cdba3379457436912226&rid=giphy.gif', 'https://media.giphy.com/media/r3X6A0sKxhf44/giphy.gif', 'https://media.giphy.com/media/D8qOjuR3nnZmw/giphy.gif', 'http://giphygifs.s3.amazonaws.com/media/12UfMROT75SAow/giphy.gif', 'https://giphy.com/gifs/snow-winter-snowball-6eDkkWCzqgSg8', 'https://giphy.com/gifs/filmeditor-will-ferrell-elf-xUySTqYAa9n6awCiSk', 'https://giphy.com/gifs/afv-fail-snow-26Ff2l7ENOhVCJpLy', 'https://giphy.com/gifs/fight-snowball-lI9vcjXROJM7S', 'http://giphygifs.s3.amazonaws.com/media/7kFeo8vsWURW0/giphy.gif', 'https://media.giphy.com/media/xdzqTwGlV54I0/giphy.gif'];

        var gifler = gif[Math.floor(Math.random() * gif.length)];
      }

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const kartopu = new Discord.RichEmbed()
    .setDescription(`**${message.author.username},**` + ` **${user.username}** Kişisine kartopu attı!`)
    .setColor('ffdf00')
    .setTimestamp()
        .setImage(gifler)
    return message.channel.sendEmbed(kartopu);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kartopu',
  description: 'Kartopu',
  usage: '!!kartopu <@Kişi>'
};
