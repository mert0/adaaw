const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send('❌ **Çıkma Teklif Edeceğin Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!❤️❤️')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim😆', `Bu Arada Seviliyorsunuz!`)
    .addField('Teklif Eden Kişi :', `➽ <@${message.author.id}>`)
    .setFooter('Çıkma Teklifi')
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin ✅')
    .setFooter('Çıkma Teklifi')
    message.channel.sendEmbed(dmtamam);
    
        message.channel.send('✅ **Teklif Gönderildi! Bol Şans!😉**');
    };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çıkmateklifi"],
  permLevel: 0
};

exports.help = {
  name: 'çıkmateklifiet',
  description: 'etiketlediğiniz kişiyiye çıkma teklifi edersiniz.',
  usage: 'çıkmateklifiet'
};