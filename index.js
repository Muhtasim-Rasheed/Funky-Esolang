const fs = require('fs')
const vm = require('vm')
const readline = require('readline')

const context = {
  console: console,
  readline: readline,
  process: process,
  fs: fs
}

const defenitionsCode = fs.readFileSync('defenitions.js', 'utf8')
vm.runInNewContext(defenitionsCode, context)

const funkyCode = fs.readFileSync(process.argv[2], 'utf8')
vm.runInNewContext(funkyCode, context)