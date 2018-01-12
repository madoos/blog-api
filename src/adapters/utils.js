'use strict'

import { forEach, curry, isNil } from 'ramda'

const _abortIfNotHasPropFrom = curry((target, prop) => {
  if (isNil(target[prop])) throw new Error(`the dependency does not implement the interface: ${prop}`)
})
const checkInterface = (target, props) => forEach(_abortIfNotHasPropFrom(target), props)

export {
  checkInterface
}
