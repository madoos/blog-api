'use strict'

import log4js from 'log4js'

export default function makeLogger ({ config }) {
  const logger = log4js.getLogger()
  logger.level = config.DEBUG_LEVEL
  return logger
}
