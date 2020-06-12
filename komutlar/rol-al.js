const Discord = require('discord.js')

exports.run = async (client, message) => {
  message.delete(1000)
    message.member.addRole("716643465466871838") // olmazsa message.author.addRole("rol idi")
    message.reply('**@DD** rolünü başarıyla verdim hadi bakam gidelim mi?');
    var kanal = client.channels.get('716645876399079455')
  kanal.send(message.author + ' adlı kullanıcı başarıyla **"DD"** rolü alarak aramıza katıldı!')
  }

exports.conf = {
  aliases: ['jsal']
}
exports.help = {
  name: "dd"
}