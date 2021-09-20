import {
  FastifyRequest,
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
} from 'fastify'

/**
 * Routes
 * @route GET /
 * @route GET /photos
 */
const root: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Record<never, never>,
) => {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        message: 'Welcome to the Fastify API',
      })
  })
}

export default root
