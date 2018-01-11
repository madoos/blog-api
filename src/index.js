'use strict'

import app from './app'
import debug from 'debug'

const show = debug('app')

app.listen(3001, () => show('app listening on port 3001'))
