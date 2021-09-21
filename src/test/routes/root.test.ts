import { FastifyInstance, LightMyRequestResponse } from 'fastify'
import { test } from 'tap'
import helper from '../helper'

test('default root route', async (t: Tap.Test) => {
  const app: FastifyInstance = helper.build(t)

  const res: LightMyRequestResponse = await app.inject({
    url: '/',
  })
  t.same(JSON.parse(res.payload), { root: true })
})

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.same(JSON.parse(res.payload), { root: true })
//   })
// })
