const fs = require('fs-extra')
const path = require('path')
const homedir = require('os')
  .homedir()

module.exports = async function removeMod(modFile) {
  try {

    modPath = path.join(homedir, '.vivaldimods', 'mods');

    if (typeof modFile === 'string' && (path.parse(modFile)
        .ext === '.css' || path.parse(modFile)
        .ext === '.js')) {
      try {
        await fs.remove(path.join(modPath, path.parse(modFile)
          .base))
        console.log('Removed ' + path.parse(modFile)
          .base + '. Run `install` to remove from Vivaldi.')
      } catch (err) {
          console.error(err.message)
          throw err
      }
    } else if (Array.isArray(modFile)) {
      modFile.forEach(async function(file) {
        const fileExt = path.parse(file)
          .ext
        if (typeof file === 'string' && (fileExt === '.css' || fileExt === '.js')) {
          try {
            await fs.remove(path.join(modPath, path.parse(file)
              .base))
            console.log('Removed ' + path.parse(file)
              .base + '. Run `install` to remove from Vivaldi.')
          } catch (err) {
            console.error(err.message)
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
