#!/usr/bin/env node
const program = require('commander');
const loadMods = require('./loadMods');

program
  .option('-d, --dir <directory>', 'Vivaldi install directory, if not default')
  .parse(process.argv);

loadMods(program.dir)
