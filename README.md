# VivaldiModLoader

A mod loader for the Vivaldi browser.

Saves files in `~/.vivaldimods`. Mods are saved in `~/.vivaldimods/mods`, while the files are saved to `~/.vivaldimods/custom` after being built.

## Usage
Install globally:
```
npm install -g vivaldi-modloader
```

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

You can also install it locally, and import it from a node script:
```
npm install vivaldi-modloader
```
```javascript
const vivaldiml = require('vivaldi-modloader')

vivaldiml.install()
```


## Compatibility
Tested on macOS, but should work on Windows too if Vivaldi is installed at the default (system-wide) location.

For Linux, you will need to pass in a custom install path if Vivaldi is not installed in `/opt/vivaldi/resources/vivaldi`, but otherwise it should work (in theory, not tested).

Due to the way the build process works, there might be issues with using the mod loader on systems where npm is not available, for example if this program is run from an Electron program. I've done my best to work around this issue, but problems may still occur.
