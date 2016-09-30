/**
  - - - - - -
  S I L V V R
  API  SERVER
  - - - - - -
  api/index.js
  API Server entry point.
  @author Keenan Staffieri
 */

// Require Babel for transpiling
require('babel-core/register')
require('babel-polyfill')

// Require the rest of the API that needs to be transpiled after the hook
require('./api')
