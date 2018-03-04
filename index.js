const getBrowser = require('./getBrowser')
const injectCustom = require('./injectCustom')
const buildFiles = require('./buildFiles')
const installFiles = require('./installFiles')
const path = require('path')

module.exports = async function loadMods() {
    console.log('Started loading mods')

    await getBrowser()

    await injectCustom(path.join(__dirname, 'custom/browser.html'));

    await buildFiles()

    await installFiles()

    console.log('Finished!')
}
