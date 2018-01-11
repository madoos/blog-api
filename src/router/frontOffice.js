'use strict'

import {
  Router
} from 'express'

const frontOfficeRouter = Router()

frontOfficeRouter.get('/posts/', (req, res) => {
  res.send([{}])
})

frontOfficeRouter.get('/posts/:slug/', (req, res) => {
  res.send([1])
})

export default frontOfficeRouter
