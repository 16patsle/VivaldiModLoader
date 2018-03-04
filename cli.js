#!/usr/bin/env node
const program = require('commander');

program
  .version('0.1.0', '-v, --version')
  .command('install', 'install Vivaldi mods')
  .command('list','list Vivaldi mods')
  .command('add <mod>','add a mod')
  .command('remove <mod>','remove a mod')
  .parse(process.argv)

  // if program was called with no arguments, show help.
  if (program.args.length === 0) program.help();
