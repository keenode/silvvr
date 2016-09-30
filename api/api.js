/**
  api/api.js
  API Server.
  @author Keenan Staffieri
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
// const serve = require('koa-static')

const API_PORT = 9000

app.name = 'Silvvr Application'
app.env = 'dev'

// Serve static 'public' directory
// app.use(serve(APP_ROOT + '/public'))

// Servce static 'node_modules' directory (development mode only)
// app.use(serve(APP_ROOT + '/node_modules'))

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

// Routes

// router.get('/admin', async (ctx, next) => {
//   // await ctx.render('index')
//   // await ctx.render('./public/admin/index.html')
// })

router.get('/test', (ctx, next) => {
  ctx.body = 'Test Page'
})

router.get('/api', (ctx, next) => {
  ctx.body = 'Welcome to the Silvvr API.'
})

// Use router middleware
app
  .use(router.routes())
  .use(router.allowedMethods())

// Start API server
app.listen(API_PORT, function () {
  console.log('API server listening on port ' + API_PORT)
})
