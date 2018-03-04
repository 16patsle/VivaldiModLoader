#!/usr/bin/env node
const program = require('commander');
const addMod = require('./addMod');

program
  .arguments('<mod>')
  .parse(process.argv);

if (program.args.length === 0) program.help();

addMod(program.args);
