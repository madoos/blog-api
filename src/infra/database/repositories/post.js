'use strict'

const post = require('./fakeData/post.json')
const postList = require('./fakeData/postList.json')

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
