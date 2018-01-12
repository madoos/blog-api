'use strict'

import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

export default function createServer ({ config, logger, postRouter }) {
  const app = express()

  app
  .use(helmet())
  .set('x-powered-by', false)
  .use(methodOverride('X-HTTP-Method')) // Microsoft
  .use(methodOverride('X-HTTP-Method-Override')) // Google
  .use(methodOverride('X-Method-Override')) // IBM
  .use(morgan('dev'))
  .use(cors({ origin: true, maxAge: 600 }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/api/', postRouter)

  return app
}
