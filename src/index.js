'use strict'

import app from './app'
import debug from 'debug'
import configuration from './CONFIG'

const { PORT } = configuration
const show = debug('app')

app.listen(PORT, () => show(`app listening on port ${PORT}`))
