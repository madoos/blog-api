'use strict'

const serverInterface = ['start', 'getInstance']
const configInterface = ['PORT', 'DEBUG_LEVEL']
const loggerInterface = ['debug', 'trace', 'info', 'warn', 'error', 'fatal']
const postRepositoryInterface = ['findBySlug', 'list']

export {
  serverInterface,
  configInterface,
  loggerInterface,
  postRepositoryInterface
}
