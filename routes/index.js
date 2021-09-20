'use strict'

const photosRoute = require('./photos')
const rootRoute = require('./root')

/**
 * Routes
 * @route GET /
 * @route GET /photos
 */
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    rootRoute(request, reply)
  })

  fastify.get('/photos', async function (request, reply) {
    photosRoute(request, reply, fastify)
  })
}
