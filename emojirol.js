const ReactionRole = require("reaction-role");
const BookmanDB = require("bookman");
const reactionRole = new ReactionRole.Main("NzA0ODEwMzI1OTQ5NTQ2NjA5.Xs-tow.4W4paxUMMTyGvWbl563-NOgvWsI");
const clientler = reactionRole.Client();
clientler.config = {
  prefix: "k!",
  db: new BookmanDB("alpike")
}
reactionRole.init();

clientler.on("ready", () => {
  console.log(`[BOT] ${clientler.user.username} çevrimiçi!`);
  let systems = clientler.config.db.get("alpike");
  for (let alpike in systems) {
    alpike = systems[alpike];
    let option = reactionRole.createOption(alpike.emoji, alpike.role)
    reactionRole.createMessage(alpike.message, alpike.channel, option);
    reactionRole.reInit();
  }
});

clientler.on("message", alpike => {
  if (!alpike.content.startsWith(clientler.config.prefix) || alpike.author.bot) return;
  const args = alpike.content.slice(clientler.config.prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  if (command == "emojirol") {
    if (!args[0]) return alpike.channel.send("Bir kanal ID belirtiniz.");
    if (!args[1]) return alpike.channel.send("Bir mesaj ID belirtiniz.");
    if (!alpike.mentions.roles.first()) return alpike.channel.send("Bir rol etiketleyin.");
    if (!args[3]) return alpike.channel.send("Bir emoji belirtiniz.");
    let option = reactionRole.createOption(args[3], alpike.mentions.roles.first().id)
    reactionRole.createMessage(args[1], args[0], option);
    reactionRole.reInit();
    let obj = {
      channel: args[0],
      message: args[1],
      role: alpike.mentions.roles.first().id,
      emoji: args[3]
    }
    clientler.config.db.set(`alpike.${args[0]}`, obj);
    alpike.channel.send("! Sistem başarıyla kuruldu.");
  }
});

