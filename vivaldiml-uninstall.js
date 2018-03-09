#!/usr/bin/env node
const program = require('commander');
const uninstallMods = require('./uninstallMods');

program
  .option('-d, --dir <directory>', 'Vivaldi install directory, if not default')
  .parse(process.argv);

uninstallMods(program.dir)
