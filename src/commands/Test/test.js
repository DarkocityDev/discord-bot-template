module.exports = {
    name: "test", // Name of the command,
    description: "Test if this command works", // Description of the command
    category: "Test", // What folder is the command in
    run: async(client, message, args) => { // Run the command via client, message, args (See message.js)

        // PUT CODE HERE
        message.channel.send("Test command works!")
    }
    //DO NOT PUT CODE HERE, YOUR CODE WILL NOT RUN
}