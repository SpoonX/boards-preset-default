const shell = require('shelljs');

module.exports = [
  {
    definedTask: 'default:checkBinary',
    prepare    : params => Object.assign(params, { checkBinary: params.exec.split(' ')[0] })
  },
  {
    task: ({ exec }) => {
      const command = shell.exec(exec);

      if (command.code !== 0) {
        throw new Error(`Running command "${exec}" failed. (${command.code}).\nGot error: ${command.stderr}`);
      }
    }
  }
];
