module.exports = {
  name: 'aor',
  // Where will you keep your boilerplate templates?
  templateRoot: __dirname + '/templates',

  tasks: {
    init: {},
    hello: {task: 'generate', template: 'aor/hello.hs', target: '{{ greetings:greetings }}/{{ greetingFile:{{ pascalCased }} }}.html'},
    todo: {task: 'modify', target: 'changes.js', patch: {pattern: /]/, prepend: `  '{{name}}',\n  `}}
  }
};
