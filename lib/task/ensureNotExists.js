const fileExists = require('file-exists').sync;

module.exports = {
  task: ({ ensureNotExists }) => {
    if (fileExists(ensureNotExists)) {
      throw new Error(`File or directory "${ensureNotExists}" already exists.`);
    }
  }
};
