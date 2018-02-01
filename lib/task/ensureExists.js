const fileExists = require('file-exists').sync;

module.exports = {
  task: ({ ensureExists }) => {
    if (!fileExists(ensureExists)) {
      throw new Error(`Did not find existing file or directory "${ensureExists}".`);
    }
  }
};
