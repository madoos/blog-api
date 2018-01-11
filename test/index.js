'use strict'

import Mocha from 'mocha'
import { join } from 'path'

const mocha = new Mocha({ timeout: 3000 })

const suite = [
  join(__dirname, 'dummy.js')
]

suite
.forEach((test) => mocha.addFile(test))

mocha
.run()
.on('end', process.exit)
