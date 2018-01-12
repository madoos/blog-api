'use strict'

import { checkInterface } from './utils'
import { configInterface, loggerInterface } from './interfaces'

function serverAdapter ({ config, serverInstance, logger }) {
  checkInterface(config, configInterface)
  checkInterface(logger, loggerInterface)
  const { PORT } = config

  return {
    start: () => serverInstance.listen(PORT, () => logger.info(`App listening on port ${PORT}`)),
    getInstance: () => serverInstance
  }
}

export default serverAdapter
