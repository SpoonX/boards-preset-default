const shell = require('shelljs');

module.exports = {
  task: ({ checkBinary }) => {
    if (!shell.which(checkBinary)) {
      throw new Error(`Sorry, this task requires "${checkBinary}".`);
    }
  }
};
