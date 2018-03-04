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

async function copyModFiles(modPath, browserPath) {
    try {
        await fs.copy(path.join(modPath, 'custom/'), path.join(browserPath))
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function installFiles(modPath, customPath) {
    try {
        const browserPath = customPath || await getBrowserPath()
        await backupBrowserFile(browserPath)
        console.log('Backed up browser.html to browser-backup.html before copying')
        await copyModFiles(modPath, browserPath)
        console.log('Built mod files copied to ' + browserPath)
    } catch (err) {
        console.error(err)
    }
}
