module.exports = {
  task: ({ _boards: { isBoardsProject } }) => {
    if (!isBoardsProject) {
      throw new Error('Did not find existing boards file. Refusing to run.');
    }
  }
};
