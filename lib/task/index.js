// Task template is relative to executing task.
module.exports = {
  prepare     : require('./prepare'),
  ensureNew   : require('./ensureNew'),
  ensureNotNew: require('./ensureNotNew'),
  init        : require('./init'),
  preset      : require('./preset'),
  tasks       : require('./tasks'),
};
