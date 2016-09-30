/**
  api/app.js
  API Server.
  @author Keenan Staffieri
  Helpful Koa 2 API boilerplate reference: https://github.com/superalsrk/koa2-boilerplate
 */

'use strict';

import Koa from 'koa'
import routes from './routes'

const app = new Koa()

const API_PORT = 9000

app.name = 'Silvvr Application'
app.env = 'dev'

// x-response-time
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// Logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// Use router middleware
app.use(routes())

// Start API server
app.listen(API_PORT, function () {
  console.log('API server listening on port ' + API_PORT)
})
