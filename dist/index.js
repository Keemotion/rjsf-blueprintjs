
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./blueprintjs.cjs.production.min.js')
} else {
  module.exports = require('./blueprintjs.cjs.development.js')
}
