#!/usr/bin/env node

const glob = require('glob');
const { resolve } = require('path');

const cwd = process.cwd();

glob(process.argv[2], {}, (error, files) => {
  if (!Array.isArray(files)) {
    throw new Error('glob should return an array of files');
  }

  files.forEach(file => require(resolve(cwd, file)));
});
