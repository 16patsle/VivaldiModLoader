const fs = require('fs-extra')
const path = require('path')

async function copyModFiles(modPath, vivaldiPath) {
    try {
        await fs.copy(path.join(modPath, 'custom/'), path.join(vivaldiPath))
    } catch (err) {
        console.error(err)
    }
}

module.exports = async function installFiles(modPath, vivaldiPath) {
    try {
        await copyModFiles(modPath, vivaldiPath)
        console.log('Built mod files copied to ' + vivaldiPath)
    } catch (err) {
        console.error(err)
    }
}
