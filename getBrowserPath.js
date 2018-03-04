const fs = require('fs-extra')
const path = require('path')
const homedir = require('os').homedir()

module.exports = async function getBrowserPath() {
    try {
        let appdir;
        let appdirLast;
        if (process.platform === "win32") {
            appdir = path.join('C:\\', 'Program Files', 'Vivaldi', 'Application')
            appdirLast = path.join('resources', 'vivaldi')
        } else if (process.platform === "darwin") {
            appdir = path.join('/Applications', 'Vivaldi.app', 'Contents', 'Versions')
            appdirLast = path.join('Vivaldi Framework.framework', 'Resources', 'vivaldi')
        } else if (process.platform === "linux") {
            appdir = path.join('/opt','vivaldi','resources','vivaldi')
        }

        const dir = await fs.readdir(appdir)

        const newDir = []
        for (item of dir) {
            if (/([0-9]+\.){3}[0-9]+/.test(item)) {
                newDir.push(item)
            }
        }
        newDir.sort()

        if(process.platform === "win32"||process.platform === "darwin"){
          return path.join(appdir, newDir[newDir.length - 1], appdirLast)
        } else {
          return appdir
        }

    } catch (err) {
        console.error(err)
    }
}
