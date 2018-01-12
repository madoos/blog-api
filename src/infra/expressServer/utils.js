'use strict'

import { mapObjIndexed, identity } from 'ramda'
import { wrap } from 'co'

const responseWithReturn = (fn, mapReqToProps = identity) => async function (req, res) {
  const controller = fn.constructor.name === 'GeneratorFunction' ? wrap(fn) : fn
  const data = await controller(mapReqToProps(req))
  return res.send(data)
}

const responseWithReturnAll = mapObjIndexed(responseWithReturn)

export {
  responseWithReturnAll,
  responseWithReturn
}

export default {
  responseWithReturn,
  responseWithReturnAll
}
