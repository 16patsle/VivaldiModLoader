const fs = require('fs-extra')
const path = require('path')
const homedir = require('os')
  .homedir()

module.exports = async function listMods() {
  try {

    modPath = path.join(homedir, '.vivaldimods', 'mods');

    const files = await fs.readdir(modPath)
    const mods = {
      css: [],
      js: []
    }

    files.forEach(function(file){
      if(/\.css$/.test(file)){
        mods.css.push(file)
      } else if(/\.js$/.test(file)){
        mods.js.push(file)
      }
    })

    return mods
  } catch (err) {
    console.log(err)
  }

}
