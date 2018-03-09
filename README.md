# VivaldiModLoader

A mod loader for the Vivaldi browser.

Saves files in `~/.vivaldimods`. Mods are saved in `~/.vivaldimods/mods`, while the files are saved to `~/.vivaldimods` after being built.

## Usage
Install globally:
```
npm install -g vivaldi-modloader
```
(not yet published)

The mod loader exposes a CLI command called vivaldiml. To install mods:
```
vivaldiml install
```

If you have a non-standard install directory, pleas specify the path to the directory containing browser.html using the -d flag:
```
vivaldiml install -d /path/to/Vivaldi
```

If you want a list of all the mods you have installed, run:
```
vivaldiml list
```

You can use the add and remove commands to add a file to the mods folder. They even take mulitple files at once!
```
vivaldiml add file.js file.css
vivaldiml remove file.js file.css
```

To remove any trace of the mods from the vivaldi folder, use uninstall
```
vivaldiml uninstall
```

To simply install using the non-cli version, clone the repo and run:
```
node run.js
```

You can also import it from node, and use it that way (as soon as I publish it on npm):
```javascript
const vivaldiml = require('vivaldiml')

vivaldiml.install()
```


## Compatibility
Tested on macOS, but should work on Windows too if Vivaldi is installed at the default location.

For Linux, you might need to pass in a custom install path if Vivaldi is not installed in `/opt/vivaldi/resources/vivaldi`, but otherwise ut should work, in theory.

Due to the way things are done at the moment, the build part of the mod loader might not work when used on a system without npm. This will be improved in the future.
