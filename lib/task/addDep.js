const shell = require('shelljs');

module.exports = [
  {
    definedTask: 'default:checkBinary',
    prepare    : params => Object.assign(params, { checkBinary: params._boards.packageManager })
  },
  {
    task: ({ _boards: { packageManager }, addDep }) => {
      if (typeof addDep === 'string') {
        addDep = { dev: false, dependency: addDep };
      }

      const { dev, dependency, cwd } = addDep;

      let installCommand = packageManager === 'yarn' ? 'yarn add ' : ('npm i ' + (!dev ? '--save ' : ''));

      if (dev) {
        installCommand += '-D ';
      }

      installCommand += dependency;

      if (cwd) {
        shell.cd(cwd);
      }

      const install = shell.exec(installCommand);

      if (cwd) {
        shell.cd('-');
      }

      if (install.code !== 0) {
        throw new Error(`Adding dependency failed (${install.code}).\nGot error: ${install.stderr}`);
      }
    }
  }
];
