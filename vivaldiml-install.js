#!/usr/bin/env node
const program = require('commander');
const installMods = require('./installMods');

program
  .option('-d, --dir <directory>', 'Vivaldi install directory, if not default')
  .parse(process.argv);

installMods(program.dir)
