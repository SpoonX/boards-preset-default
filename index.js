const tasks = require('./lib/task/index');

module.exports = {
  // Where will you keep your boilerplate templates?
  templateRoot: __dirname + '/templates/default',

  tasks: {
    tasks : {
      task: () => {
        console.log('[Available tasks]: \n');

        console.log(Reflect.ownKeys(module.exports.tasks).sort().map(task => `- ${task}`).join('\n'), '\n');
      }
    },

    prepare: tasks.prepare,

    preset: [
      { task: 'generate', from: 'preset', glob: '**/*', target: 'boards-preset-{{ name }}/' }
    ],

    init: tasks.init,

    ensureNew: tasks.ensureNew,

    ensureNotNew: tasks.ensureNotNew,
  }
};
