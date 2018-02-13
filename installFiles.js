const fs = require('fs-extra')
const path = require('path')
const getBrowserPath = require('./getBrowserPath')

async function backupBrowserFile(browserPath) {
    try {
        await fs.copy(path.join(browserPath, 'browser.html'), path.join(browserPath, 'browser-backup.html'))
    } catch (err) {
        console.error(err)
    }
}

async function copyModFiles(browserPath) {
    try {
        await fs.copy(path.join(__dirname, 'custom'), path.join(browserPath))
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function getBrowser() {
    try {
        const browserPath = await getBrowserPath()
        await backupBrowserFile(browserPath)
        console.log('Backed up browser.html to browser-backup.html before copying')
        await copyModFiles(browserPath)
        console.log('Built mod files copied to ' + browserPath)
    } catch (err) {
        console.error(err)
    }
}