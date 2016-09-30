/**
  api/routes/api.js
  API Routes entry point.
  @author Keenan Staffieri
 */

import Router from 'koa-router'

// Init router
const router = new Router()

// Index route
router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'Index API route.'
  }
})

// Test route
router.get('/test', async (ctx, next) => {
  ctx.body = {
    message: 'Test API route.'
  }
})

export default router
