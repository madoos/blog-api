'use strict'

import { Router } from 'express'
import { responseWithReturn } from '../utils'

export default function makePostRouter ({ postController }) {
  const postRouter = Router()
  const { list, findBySlug } = postController

  postRouter
  .get('/posts/', responseWithReturn(list))
  .get('/posts/:slug/', responseWithReturn(findBySlug, (req) => req.params.slug))

  return postRouter
}
