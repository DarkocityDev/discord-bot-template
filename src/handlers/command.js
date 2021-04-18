/*

⚠⚠⚠ WARNING ⚠⚠⚠

IF YOU EDIT, OR DELETE ANY PART OF THIS CODE, YOUR BOT MAY NOT FUNCTION OR START UP CORRECTLY. 

IF YOU DO KNOW WHAT YOU'RE DOING, CONSIDER WORKING FOR US: https://geniton.com/jobs

*/

const {readdirSync} = require('fs');
const ascii = require('ascii-table');

let table = new ascii("Client Commands");
table.setHeading('Command', 'Load Status');

module.exports = (client) => {
    readdirSync("./src/commands/").forEach(dir => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith('.js'));

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅')
            } else {
                table.addRow(file, `❌ -> Error`)
                continue;
            } if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    })
    console.log(table.toString())
}