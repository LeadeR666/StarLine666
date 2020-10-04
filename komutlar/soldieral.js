const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`Yetkili Alım Sorumlusu\` Rolüne Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  member.removeRole('754390047012159498')
  member.addRole('VERİLECEK ROL İD')
const embed = new Discord.RichEmbed()


      .addField(`**StarLine - Moderasyon**`,
      `\n**🔸️İşlem Yapılan Kullanıcı:** ${member.user} \n🔸️**İşlemi Yapan Yetkili:** \`${message.author.username}\``)
client.channels.get('762218078859427851').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};
exports.help = {
  name: "soldier-al",
  description: "Kayıt Sistemi",
  usage: "Kayıt Sistemi"
};