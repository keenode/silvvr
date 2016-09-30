/**
  api/routes/api.js
  API Routes entry point.
  @author Keenan Staffieri
 */

'use strict';

import Router from 'koa-router'

const router = new Router()

router.get('/test', async (ctx, next) => {
  ctx.body = {
    message: 'Test API route.'
  }
})

export default router
