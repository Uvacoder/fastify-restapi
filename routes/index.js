'use strict'

const photos = require('./photos')

/**
 * Routes
 * @route GET /
 * @route GET /photos
 */
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.send({ root: true })
  })

  fastify.get('/photos', async function (request, reply) {
    photos(request, reply)
  })
}
