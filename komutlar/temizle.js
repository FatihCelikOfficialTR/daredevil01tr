const Discord = require("discord.js");
let owner = "410087129012502559";

exports.run = function(client, message, args) {
  message.delete(1000);
  message.channel.send(
    new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**Eylem: **", "Seçili olan sohbet kanalı silme!")
    .addField("**Yetkili: **", message.author.username)
    .addField("**Sonuç: **", `Başarılıyla tamamlandı!`)
  //.addField('**Kaç Adet**', + messagecount)
      .setColor("RED") //RuffLys#1006
      .setTitle(
        ":white_check_mark: SOHBET SİLME İŞLEMİ SONUCU :white_check_mark:"
      )
      .setDescription("Bu işlemi sürekli kullannılmayacaktır. Gereksiz yere kullanımda sonuçlarına katlanırsın.!")
  );

  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xd97634)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        ":warning: Uyarı :warning:",
        "`temizle` adlı komutu özel mesajlarda kullanamazsın."
      );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
      .setColor(0xd97634)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        ":warning: Uyarı :warning:",
        "Mesajları silebilmen için `Mesajları Yönet` yetkisine sahip olmalısın."
      );
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(" "));
  message.channel
    .fetchMessages({
      limit: messagecount
    })
    .then(messages => message.channel.bulkDelete(messages));
  const sohbetsilindi = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**Eylem: **", "Seçili olan sohbet kanalı silme!")
    .addField("**Yetkili: **", message.author.username)
    .addField("**Sonuç: **", `:white_check_mark: Başarılı :white_check_mark:`);
  //.addField('**Kaç Adet**', + messagecount)
  return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
  console
    .log("**Sohbet " + message.member + " tarafından silindi! **")
    .then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "temizle",
  description: "Belirlenen miktar mesajı siler.",
  usage: "temizle <temizlenecek mesaj sayısı>"
};
