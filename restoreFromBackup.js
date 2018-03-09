const fs = require('fs-extra')
const path = require('path')

module.exports = async function restoreFromBackup(vivaldiPath) {
    try {
      if(await fs.pathExists(path.join(vivaldiPath, 'browser-backup.html'))){
        await fs.move(path.join(vivaldiPath, 'browser-backup.html'), path.join(vivaldiPath, 'browser.html'), { overwrite: true })
        console.log('Restored browser.html from browser-backup.html')
      } else {
        console.error('Could not find browser-backup.html. Are you sure that mods are installed?')
      }
    } catch (err) {
        console.error(err)
    }
}
