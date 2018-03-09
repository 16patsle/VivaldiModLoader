const fs = require('fs-extra')
const path = require('path')

async function removeModFiles(vivaldiPath) {
    try {
      if(await fs.pathExists(path.join(vivaldiPath, 'custom/', 'custom.css'))){
        await fs.remove(path.join(vivaldiPath, 'custom/', 'custom.css'))
      }
      if(await fs.pathExists(path.join(vivaldiPath, 'custom/', 'custom.js'))){
        await fs.remove(path.join(vivaldiPath, 'custom/', 'custom.js'))
      }
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function uninstallFiles(vivaldiPath) {
    try {
        await removeModFiles(vivaldiPath)
        console.log('Removed mod files from ' + vivaldiPath)
    } catch (err) {
        console.error(err)
    }
}
