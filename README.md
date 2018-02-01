# boards-preset-default

Default preset for [Boards CLI](https://github.com/SpoonX/boards-cli).

**Note:** Don't install this project directly. Instead, install the [Boards CLI](https://github.com/SpoonX/boards-cli).

## Installing

These presets get installed by default when installing [Boards CLI](https://github.com/SpoonX/boards-cli).

## Tasks

Following are the tasks bundled with this preset. You can list them in your console by running:

`boards default:tasks`

### tasks

`boards default:tasks`

Outputs the tasks for this preset.

### preset

`boards default:preset <name>`

Create a new preset template to simplify creating your own preset.

### init

`boards default:init [src]`

Create a `boards.js` file in your current directory. Provsided `src` is used to set the path to your project's source code.

### ensureNew

`boards default:ensureNew`

Utility task to use in your own tasks / preset tasks. Throws an error if there's a `boards.js` file in the current directory.

```js
{definedTask: 'default:ensureNew'}
```

### ensureNotNew

`boards default:ensureNotNew`

Utility task to use in your own tasks / preset tasks. Throws an error if there's no `boards.js` file in the current directory.

```js
{definedTask: 'default:ensureNotNew'}
```

### ensureExists

`boards default:ensureExists`

Utility task to use in your own tasks / preset tasks. Throws an error if provided file doesn't exist.

```js
{
  definedTask: 'default:ensureExists',
  prepare: p => p.ensureExists = 'path to check (can be relative to cwd)'
}
```

### ensureNotExists

`boards default:ensureNotExists`

Utility task to use in your own tasks / preset tasks. Throws an error if provided file exists.

```js
{
  definedTask: 'default:ensureNotExists',
  prepare: p => p.ensureNotExists = 'path to check (can be relative to cwd)'
}
```

### addDep

`boards default:addDep`

Utility task to use in your own tasks / preset tasks. Adds a dependency to an existing project.

This task detects which package manager is being used in the project (yarn or npm).

```js
{
  definedTask: 'default:addDep',
  prepare: {
    addDep: {
      dev: true,
      dependency: 'boards-preset-aor'
    }
  }
}
```

If you simply want to add a dependency (non-dev) you can also use a string:


```js
{
  definedTask: 'default:addDep',
  prepare: 'boards-preset-aor'
}
```

### cd

`boards default:cd`

Utility task to use in your own tasks / preset tasks. Navigates to a new directory.
Useful for example after creating a new directory (by using create-react-app for example).

```js
{ definedTask: 'default:cd', prepare: p => p.cd = p.name }
```

_**Note:** You might want to call `default:prepare` after this, to reinitialize the package manager used in the new directory._

### checkBinary

`boards default:checkBinary`

Utility task to use in your own tasks / preset tasks. Verifies a global binary exists on the system.
Throws an error when the binary wasn't found.

```js
{ definedTask: 'default:checkBinary', prepare: { checkBinary: 'create-react-app' } }
```

### exec

`boards default:exec`

Utility task to use in your own tasks / preset tasks. Executes a command on the cli.

```js
{ definedTask: 'default:exec', prepare: p => { p.exec = `create-react-app ${p.name}`} }
```

### prepare

`boards default:prepare`

Internal command, automatically called before the main task.
This task sets default parameters holding information needed for boards to function.

**Warning:** Only call this method when needed (for example after `default:cd`)

## License

MIT
