module.exports = {
  // Where will you keep your boilerplate templates?
  templateRoot: __dirname + '/templates',

  tasks: {
    // Dumps all the tasks to the cli.
    greet: {
      task: () => {
        console.log('Greetings from within. <Insert obligatory "Hello World"> here.');
      }
    }
  },
};
