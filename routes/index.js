'use strict'

const photosRoute = require('./photos')
const rootRoute = require('./root')

/**
 * Routes
 * @route GET /
 * @route GET /photos
 */
module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    rootRoute(request, reply)
  })

  fastify.get('/photos', async function (request, reply) {
    await photosRoute(request, reply, fastify)
  })
}
