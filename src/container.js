'use strict'

import {
  createContainer,
  InjectionMode,
  asFunction,
  asValue
} from 'awilix'

// INFRA
import config from './infra/configuration'
import expressServer from './infra/expressServer'
import logger from './infra/logger'
import postRouter from './infra/expressServer/routers/post'
import postRepository from './infra/database/repositories/post'

// ADAPTERS
import serverAdapter from './adapters/server'
import loggerAdapter from './adapters/logger'

// USE CASES
import postController from './usecases/posts'

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

container.register({
  config: asValue(config),
  loggerInstance: asFunction(logger).singleton(),
  serverInstance: asFunction(expressServer).singleton(),
  postRepository: asValue(postRepository),
  postController: asFunction(postController).singleton(),
  postRouter: asFunction(postRouter).singleton(),
  logger: asFunction(loggerAdapter).singleton(),
  server: asFunction(serverAdapter).singleton()
})

export default container
