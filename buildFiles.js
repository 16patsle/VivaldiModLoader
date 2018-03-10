const checkNpm = require('./checkNpm');
const execa = require("execa");
const fs = require('fs-extra');
const path = require('path');

async function copyConfig(modPath) {
  await fs.copy(path.join(__dirname, 'brunch-config.js'), path.join(modPath, 'brunch-config.js'))
  await fs.copy(path.join(__dirname, 'brunch-package.json'), path.join(modPath, 'package.json'))
}

module.exports = async function buildFiles(modPath) {
  try{
    console.log('Started building mod files')
    await copyConfig(modPath)

    const npm = await checkNpm()

    if(!npm){
      const npmInstall = await execa(path.join(__dirname, 'node_modules/.bin/npm'), ['install'], { cwd: modPath })
      console.log('– NPM: ' + npmInstall.stdout)
    }

    const build = await execa('brunch', ['b','-p'],{ cwd: modPath })
    build.stdout.split('\n').forEach(line=>{
      console.log('– Brunch: ' + line.split(':')[3].trim())
    })
    console.log('Mod files built successfully!')

  }
  catch(err){
    console.error(err);
  }
}
