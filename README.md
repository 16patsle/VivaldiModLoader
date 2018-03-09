# VivaldiModLoader

A mod loader for the Vivaldi browser.

Saves files in `~/.vivaldimods`. Mods are saved in `~/.vivaldimods/mods`, while the files are saved to `~/.vivaldimods` after being built.

## Usage
Install globally:
```
npm install -g vivaldiml
```
(not yet published)

To install mods:
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

To run the non-cli version, clone the repo and run:
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

For Linux, you might need to pass in a custom install path if Vivaldi is not installed in `/opt/vivaldi/resources/vivaldi`.
