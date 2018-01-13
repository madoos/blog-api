'use strict'

import post from './fakeData/post'
import postList from './fakeData/postList'

function findBySlug (slug) {
  post.slug = slug
  return post
}

function list () {
  return postList
}

export default {
  findBySlug,
  list
}
