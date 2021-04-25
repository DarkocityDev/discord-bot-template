const Discord = require('discord.js');
module.exports = {
   name: "ban",
   aliases: ["b"],
   timeout: 3000,
   run: async(client, message, args) => {
     if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("I do not have the **Ban Members** permission. Please make sure you enable it so I can run this command.");
     if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have the **Ban Members** permission.")
     
     let user = message.mentions.members.first();
     if (!user) return message.channel.send("That is not a valid user!");
     
     let reason = args.slice(1).join(" ");
     if (!reason) return message.channel.send("I do not see a reason.");
     
     let banned = new Discord.MessageEmbed()
     .setDescription(`Successfully banned ${user} for the reason of: \`${reason}\`.`)
     .setColor("GREEN")
     .setTimestamp()
     .setFooter("Successful", bot.user.displayAvatarURL({ dynamic : true }))
      
     try {
        user.ban({ reason: reason });
        message.channel.send(banned).then(sent => {
            sent.react("✅");
        });
     } catch (e) {
         console.log(e)
     }
   }
}
