const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535467036768469002")
setInterval(function() {
channel.send(`notch111 notch111 notch111 notch111 notch111 notch111`);
}, 30)
})

client.login(process.env.BOT_TOKEN);