'use strict'

import container from './container'
const server = container.resolve('server')
server.start()
