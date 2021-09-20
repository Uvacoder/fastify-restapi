import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'
import { IncomingMessage, Server } from 'http'
import { photosRoute } from './photos'
import { rootRoute } from './root'

/**
 * Routes
 * @route GET /
 * @route GET /photos
 */
module.exports = async (fastify: FastifyInstance, opts: unknown) => {
  fastify.get(
    '/',
    async (
      request: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
      reply,
    ) => {
      rootRoute(request, reply)
    },
  )

  fastify.get('/photos', async function (request, reply) {
    await photosRoute(request, reply, fastify)
  })
}
