const getBrowser = require('./getBrowser')
const injectCustom = require('./injectCustom')
const buildFiles = require('./buildFiles')
const installFiles = require('./installFiles')
const path = require('path')
const homedir = require('os')
  .homedir()

module.exports = async function loadMods(vivaldiPath) {
  try {
    console.log('Started loading mods')

    if (!typeof vivaldiPath === "string") {
      vivaldiPath = null
    } else {
      vivaldiPath = path.normalize(vivaldiPath)
    }

    modPath = path.join(homedir, '.vivaldimods');

    await getBrowser(modPath, vivaldiPath)

    await injectCustom(modPath);

    await buildFiles(modPath)

    await installFiles(modPath, vivaldiPath)

    console.log('Finished!')
  } catch (err) {
    console.log(err)
  }

}
