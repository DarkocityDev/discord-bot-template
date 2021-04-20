module.exports = {
        name: "ping",
        aliases: ["latency"],
    run: async(client, message, args) => {
      message.channel.send("pong!").then(m => m.edit(`\`\`\`js
Ping: ${client.ws.ping}
\`\`\``))
 
    }
};


