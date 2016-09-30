/**
  api/config/base.js
  Base API Server configuration.
  @author Keenan Staffieri
 */

'use strict';

import config from './config'

export default function middleware (app) {

  app.name = config.app.name
  // app.env = 'dev'

}
