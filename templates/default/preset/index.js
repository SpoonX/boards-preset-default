module.exports = {
  // Where will you keep your boilerplate templates?
  templateRoot: __dirname + '/templates',

  tasks: {
    // Dumps all the tasks to the cli.
    tasks: {
      task: () => {
        console.log('[Available tasks]: \n');

        console.log(Reflect.ownKeys(module.exports.tasks).sort().map(task => `- ${task}`).join('\n'), '\n');
      }
    }
  },
};
