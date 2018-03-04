const npmRunScript = require("npm-run-script");
const fs = require('fs-extra');
const path = require('path');

async function copyConfig(modPath) {
  await fs.copy(path.join(__dirname, 'brunch-config.js'), path.join(modPath, 'brunch-config.js'))
  await fs.copy(path.join(__dirname, 'brunch-package.json'), path.join(modPath, 'package.json'))
}

module.exports = async function buildFiles(modPath) {
  try{
    await copyConfig(modPath)

    await new Promise((resolve, reject) => {
        const child = npmRunScript('(cd ' + modPath + ' && brunch b -p)');
        child.once('error', (error) => {
            //console.trace(error);
            //process.exit(1);
            reject(error)
        });
        child.once('exit', (exitCode) => {
            //console.log('Brunch exited with code ', exitCode);
            //process.exit(exitCode);
            console.log('Mod files built, exited with code ' + exitCode)
            resolve(exitCode)
        });
    })
  }
  catch(err){
    console.error(err);
  }
}
