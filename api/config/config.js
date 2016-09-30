/**
  api/config/config.js
  API Server configuration.
  @author Keenan Staffieri
 */

'use strict';

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const config = {

  development: {
    app: {
      port: 9000,
      name: 'Silvvr API Server (development mode)'
    },
    db: {
      host: 'localhost',
      port : 3306,
      user : 'root',
      password : 'root',
      database : 'silvvr'
    }
  },

  production: {
    app: {
      port: 9000,
      name: 'Silvvr API Server (production mode)'
    },
    db: {
      host: 'localhost',
      port : 3306,
      user : 'root',
      password : 'root',
      database : 'silvvr'
    }
  }

}

export default config[env]
