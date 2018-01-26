module.exports = [
  { definedTask: 'default:ensureNew' },
  {
    task    : 'generate',
    target  : `boards.js`,
    template: 'boards.hs'
  }
];
