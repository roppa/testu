#!/usr/bin/env node

const glob = require('glob');
const { resolve } = require('path');
const { spawn } = require('child_process');
const cwd = process.cwd();

glob('lib/**/*.spec.js', {}, (error, files) => {

  if (!Array.isArray(files)) {
    throw new Error('glob should return an array of files');
  }

  files.forEach(file => require(resolve(cwd, file)));
});
