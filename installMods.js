const getBrowser = require('./getBrowser')
const injectCustom = require('./injectCustom')
const buildFiles = require('./buildFiles')
const installFiles = require('./installFiles')
const isInjected = require('./isInjected')
const backupBrowserFile = require('./backupBrowserFile')
const getBrowserPath = require('./getBrowserPath')
const path = require('path')
const homedir = require('os')
  .homedir()

module.exports = async function installMods(vivaldiPath) {
  try {
    console.log('Started loading mods')

    if (typeof vivaldiPath === "string") {
      vivaldiPath = path.normalize(vivaldiPath)
    } else {
      vivaldiPath = await getBrowserPath()
    }

    modPath = path.join(homedir, '.vivaldimods');

    await getBrowser(modPath, vivaldiPath)

    const injected = await isInjected(modPath)

    if(!injected.both){
      await injectCustom(modPath)

      await backupBrowserFile(vivaldiPath)
    } else {
      if(injected.cssInjected){
        console.log('Custom CSS already injected into browser.html');
      }
      if (injected.jsInjected) {
        console.log('Custom JS already injected into browser.html');
      }
    }

    await buildFiles(modPath)

    await installFiles(modPath, vivaldiPath)

    console.log('Finished!')
  } catch (err) {
    console.log(err)
  }

}
