const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const views = require('koa-views');
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path');

const API_PORT = 9000;

app.name = 'Silvvr Application'
app.env = 'dev'

// Must be used before any router is used
app.use(views(APP_ROOT + '/admin/views', {
  extension: 'njk',
  map: {
    njk: 'nunjucks'
  }
}))

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

router.get('/', async (ctx, next) => {
  await ctx.render('dashboard')
})

router.get('/test', (ctx, next) => {
  ctx.body = 'Test Page'
})

// Use router middleware
app
  .use(router.routes())
  .use(router.allowedMethods())

// Start API server
app.listen(API_PORT, function () {
  console.log('API server listening on port ' + API_PORT)
})
