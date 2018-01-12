'use strict'

export default function post ({ postRepository }) {
  return {
    list: async function () {
      const data = await sleep(postRepository.list(), 1000)
      return data
    },
    findBySlug: async function (slug) {
      const data = await sleep(postRepository.findBySlug(slug), 1000)
      return data
    }
  }
}

function sleep (data, ms) {
  return new Promise(resolve => setTimeout(() => resolve(data), ms))
}
