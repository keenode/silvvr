/**
  api/app.js
  API Server.
  @author Keenan Staffieri
  -- Helpful Koa 2 API boilerplate reference: https://github.com/superalsrk/koa2-boilerplate
 */

import Koa from 'koa'
import config from './config/config'
import routes from './routes'

// Init app
const app = new Koa()

// Response time logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// Use router middleware
app.use(routes())

// Start API server
app.listen(config.app.port, function () {
  console.log(config.app.name + ' listening on port ' + config.app.port)
})

export default app
