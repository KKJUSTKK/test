const discord = require("discord.js");
const bot = new discord.client();
const TOKEN = process.env.TOKEN;

bot.on("ready", () => {
  console.log("im alive");
});
client.user.setActivity("prefix +", {
  type: "STREAMING"
});

bot.login("TOKEN");
