module.exports = async (client, message) => {
 
    // If the person sending a message is a bot
    if (message.author.bot) return;

    // If the message doesn't starts with the prefix
    if (!message.content.toLowerCase().startsWith(client.prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);
    if (!message.guild) return;

    // If the message is in a direct message (You can delete this if your bot is a modmail bot or requires direct message contact)
    if (message.channel.type === 'dm') return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    // If the command is equal to 0 (null)
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return;
    
    // If a command is found, run the command
    if (command) command.run(client, message, args)       
}