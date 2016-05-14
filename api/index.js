const Koa = require('koa')
const app = new Koa()
var router = require('koa-router')()

const API_PORT = 9000;

app.name = 'Silvvr Application'
app.env = 'dev'

// x-response-time
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// response
// app.use(ctx => {
//   ctx.body = 'Hello World'
// })

router.get('/', (ctx, next) => {
  ctx.body = 'Index Page'
})

router.get('/test', (ctx, next) => {
  ctx.body = 'Test Page'
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(API_PORT, function () {
  console.log('API server listening on port ' + API_PORT)
})
