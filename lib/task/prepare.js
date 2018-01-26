const fileExists = require('file-exists').sync;
const hasYarn    = require('has-yarn');
const path       = require('path');
const cwd        = process.cwd();

module.exports = {
  task: params => Object.assign(params, {
    _boards: {
      hasPackage     : fileExists(path.resolve(cwd, 'package.json')),
      packageManager : hasYarn() ? 'yarn' : 'npm',
      isBoardsProject: fileExists(path.resolve(cwd, 'boards.js'))
    }
  })
};
