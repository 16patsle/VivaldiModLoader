const fs = require('fs-extra')
const path = require('path')

module.exports = async function backupBrowserFile(vivaldiPath) {
    try {
        await fs.copy(path.join(vivaldiPath, 'browser.html'), path.join(vivaldiPath, 'browser-backup.html'))
        console.log('Backed up browser.html to browser-backup.html')
    } catch (err) {
        console.error(err)
    }
}
