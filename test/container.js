'use strict'

import { expect } from 'chai'
import container from '../src/container'

console.log(container)

describe('container test', function () {
  it('should to be an Object', function () {
      expect(container).to.be.an('object')
  })
})
