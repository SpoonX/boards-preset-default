module.exports = {
  task: params => {
    console.log('[Available tasks]: \n');

    console.log(Reflect.ownKeys(params._tasks || {}).sort().map(task => `- ${task}`).join('\n'), '\n');
  }
};
