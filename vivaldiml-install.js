#!/usr/bin/env node
const program = require('commander');
const loadMods = require('./index');

program
  .option('-d, --dir <directory>', 'Vivaldi install directory, if not default')
  .parse(process.argv);

loadMods(program.dir)
