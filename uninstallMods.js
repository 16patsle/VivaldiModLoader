const restoreFromBackup = require('./restoreFromBackup')
const uninstallFiles = require('./uninstallFiles')
const getBrowserPath = require('./getBrowserPath')
const path = require('path')
const homedir = require('os')
  .homedir()

module.exports = async function uninstallMods(vivaldiPath) {
  try {
    console.log('Started removing mods')

    if (typeof vivaldiPath === "string") {
      vivaldiPath = path.normalize(vivaldiPath)
    } else {
      vivaldiPath = await getBrowserPath()
    }

    await restoreFromBackup(vivaldiPath)

    await uninstallFiles(vivaldiPath)

    console.log('Finished!')
  } catch (err) {
    console.log(err)
  }

}
