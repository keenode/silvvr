/**
  api/routes/index.js
  Routes entry point.
  @author Keenan Staffieri
 */

'use strict';

import compose from 'koa-compose'
import Router from 'koa-router'

import RouterAPI from './api'

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'Welcome to Silvvr API server.'
})

router.use('/api', RouterAPI.routes(), RouterAPI.allowedMethods())

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
