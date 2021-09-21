import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'

/**
 * @route GET /photos
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const photosRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/photos',
    async function (request: FastifyRequest, reply: FastifyReply) {
      reply.send({
        message: 'Hello World',
      })
    },
  )
}

export default photosRoute
