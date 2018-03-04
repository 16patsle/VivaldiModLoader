const fs = require('fs-extra')
const path = require('path')
const getBrowserPath = require('./getBrowserPath')

async function copyBrowserFile(modPath, browserPath) {
    try {
        await fs.copy(path.join(browserPath, 'browser.html'), path.join(modPath, 'custom', 'browser.html'))
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function getBrowser(modPath, customPath) {
    try {
        const browserPath = customPath || await getBrowserPath()
        await copyBrowserFile(modPath, browserPath)
        console.log('Fetched browser.html from ' + browserPath)
    } catch (err) {
        console.error(err)
    }
}
