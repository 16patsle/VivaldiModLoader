const install = require('./installMods');
const uninstall = require('./uninstallMods');
const list = require('./listMods');
const add = require('./addMod');
const remove = require('./removeMod');

module.exports = {
  install,
  uninstall,
  list,
  add,
  remove
}
