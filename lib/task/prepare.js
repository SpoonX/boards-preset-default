const fileExists = require('file-exists').sync;
const shell      = require('shelljs');
const hasYarn    = require('has-yarn');
const path       = require('path');
const cwd        = process.cwd();

module.exports = {
  task: params => {
    const hasPackage           = fileExists(path.resolve(cwd, 'package.json'));
    const globalPackageManager = shell.which('yarn').code === 0 ? 'yarn' : 'npm';
    const localPackageManager  = hasPackage ? (hasYarn() ? 'yarn' : 'npm') : null;
    const packageManager       = hasPackage ? localPackageManager : globalPackageManager;

    Object.assign(params, {
      _boards: {
        isBoardsProject: fileExists(path.resolve(cwd, 'boards.js')),
        hasPackage,
        globalPackageManager,
        localPackageManager,
        packageManager,
      }
    });
  }
};
