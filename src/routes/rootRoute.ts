import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'

/**
 * @route GET /
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const rootRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/',
    async function (request: FastifyRequest, reply: FastifyReply) {
      reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
          message: 'Welcome to the Fastify API',
        })
    },
  )
}

export default rootRoute
