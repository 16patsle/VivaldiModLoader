const execa = require("execa");
const fs = require('fs-extra');
const path = require('path');

async function copyConfig(modPath) {
  await fs.copy(path.join(__dirname, 'brunch-config.js'), path.join(modPath, 'brunch-config.js'))
  await fs.copy(path.join(__dirname, 'brunch-package.json'), path.join(modPath, 'package.json'))
}

module.exports = async function buildFiles(modPath) {
  try{
    await copyConfig(modPath)

    const result = await execa('brunch', ['b','-p'],{ cwd: modPath })
    console.log(result.stdout)
    console.log('Mod files built, exited with code ' + result.code)
  }
  catch(err){
    console.error(err);
  }
}
