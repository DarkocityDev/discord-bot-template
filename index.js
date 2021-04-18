// Require packages 
const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');

// Create a new bot client
const client = new Discord.Client({
  fetchAllMembers: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBERS', 'GUILD_PRESENCES',], //Help bot's speed faster.
  disableMentions: 'everyone'
})

const { PREFIX, TOKEN } = require('./config.json');

// Creating new Discord collections for commands and aliases, and prefix.
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.prefix = PREFIX;
client.categories = fs.readdirSync("./src/commands");


// Requiring command handler
["command"].forEach(handler => {
  require(`./src/handlers/${handler}`)(client);
});

// Bot ready (online) event
client.on('ready', async () => {
  var d = new Date()
  console.log(chalk.green(`[${d.toLocaleDateString()}] [${d.toLocaleTimeString()}]`), chalk.cyan(`[ONLINE]`), chalk.white(`${client.user.tag} is now online`))
});

// Every message that the bot can view/see (event)
client.on('message', (message) => {
  require("./src/events/message")(client, message)
})

// Login into your bot using the config.TOKEN when is the .env TOKEN variable
client.login(TOKEN)

let d = new Date()
setTimeout(() => {
  console.log(chalk.green(`[${d.toLocaleDateString()}] [${d.toLocaleTimeString()}]`), chalk.cyan(`[INFO]`), chalk.white(`You're running v1.0.1. Thanks for using this package. Check out Geniton here: https://geniton.com`))
}, 3000);
