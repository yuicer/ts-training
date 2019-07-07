const fs = require('fs')

import Tester from './tester'

const sortPath = './sort'
const folder: string[] = fs.readdirSync(sortPath).filter(path => {
  return fs.statSync(`${sortPath}/${path}`).isDirectory()
})

folder.forEach(name => {
  const sort = require(`./${name}`).default
  new Tester(sort).start(`${name}-sort`)
})
