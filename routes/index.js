'use strict'

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
    reply.send({
      message: 'Hello World',
    })
  })
}
