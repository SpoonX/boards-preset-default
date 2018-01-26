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

`{definedTask: 'default:ensureNew'}`

### ensureNotNew

`boards default:ensureNotNew`

Utility task to use in your own tasks / preset tasks. Throws an error if there's no `boards.js` file in the current directory.

`{definedTask: 'default:ensureNotNew'}`

## License

MIT
