module.exports = {
  task: ({ _boards: { isBoardsProject } }) => {
    if (isBoardsProject) {
      throw new Error('Found existing boards file. Refusing to initialize.');
    }
  }
};
