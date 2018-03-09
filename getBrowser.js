const fs = require('fs-extra')
const path = require('path')

async function copyBrowserFile(modPath, vivaldiPath) {
    try {
        await fs.copy(path.join(vivaldiPath, 'browser.html'), path.join(modPath, 'custom', 'browser.html'))
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function getBrowser(modPath, vivaldiPath) {
    try {
        await copyBrowserFile(modPath, vivaldiPath)
        console.log('Fetched browser.html from ' + vivaldiPath)
    } catch (err) {
        console.error(err)
    }
}
