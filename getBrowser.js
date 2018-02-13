const fs = require('fs-extra')
const path = require('path')
const getBrowserPath = require('./getBrowserPath')

async function copyBrowserFile(browserPath) {
    try {
        await fs.copy(path.join(browserPath, 'browser.html'), path.join(__dirname, 'custom', 'browser.html'))
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function getBrowser() {
    try {
        const browserPath = await getBrowserPath()
        await copyBrowserFile(browserPath)
        console.log('Fetched browser.html from ' + browserPath)
    } catch (err) {
        console.error(err)
    }
}