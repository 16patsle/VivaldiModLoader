const fs = require('fs-extra')
const path = require('path')
const homedir = require('os')
  .homedir()

module.exports = async function addMod(modFile) {
  try {

    modPath = path.join(homedir, '.vivaldimods', 'mods');

    if (typeof modFile === 'string' && (path.parse(modFile)
        .ext === '.css' || path.parse(modFile)
        .ext === '.js')) {
      try {
        await fs.copy(path.normalize(modFile), path.join(modPath, path.parse(modFile)
          .base), {
          overwrite: false,
          errorOnExist: true
        })
        console.log('Installed ' + path.parse(modFile)
          .base + 'to mods folder. Run `install` to install into Vivaldi.')
      } catch (err) {
        if(err.message.indexOf('already exists') !== -1){
          console.log('Skipped ' + path.parse(modFile).base + '. It is already installed!')
        } else {
          console.log(err.message)
        }
      }
    } else if (Array.isArray(modFile)) {
      modFile.forEach(async function(file) {
        const fileExt = path.parse(file)
          .ext
        if (typeof file === 'string' && (fileExt === '.css' || fileExt === '.js')) {
          try {
            await fs.copy(path.normalize(file), path.join(modPath, path.parse(file)
              .base), {
              overwrite: false,
              errorOnExist: true
            })
            console.log('Installed ' + path.parse(file)
              .base + ' into mods folder. Run `install` to install into Vivaldi.')
          } catch (err) {
            if(err.message.indexOf('already exists') !== -1){
              console.log('Skipped ' + path.parse(file).base + '. It is already installed!')
            } else {
              console.log(err.message)
            }
          }
        } else {
          console.error('Please pass one or more paths to css/js files')
        }
      })
    } else {
      console.error('Please pass one or more paths to css/js files')
    }


  } catch (err) {
    console.log(err)
  }

}
