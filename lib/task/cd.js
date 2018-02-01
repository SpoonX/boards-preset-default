const shell = require('shelljs');

module.exports = {
  task: ({ cd }) => {
    shell.cd(cd);
  }
};
