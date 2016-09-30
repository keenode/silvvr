/**
  api/routes/index.js
  Routes entry point.
  @author Keenan Staffieri
 */

import compose from 'koa-compose'
import Router from 'koa-router'

// Import grouped routes
import RouterAPI from './api'

// Init router
const router = new Router()

// Index route
router.get('/', async (ctx, next) => {
  ctx.body = 'Welcome to Silvvr API server.'
})

// Setup grouped routes
router.use('/api', RouterAPI.routes(), RouterAPI.allowedMethods())

// Wildcard 404
router.get('*', async (ctx, next) => {
  ctx.body = { status : 404 }
})

export default function routes() {
  return compose(
    [
      router.routes(),
      router.allowedMethods()
    ]
  )
}
