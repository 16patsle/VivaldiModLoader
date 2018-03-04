#!/usr/bin/env node
const program = require('commander');
const removeMod = require('./removeMod');

program
  .arguments('<mod>')
  .parse(process.argv);

if (program.args.length === 0) program.help();

removeMod(program.args);
