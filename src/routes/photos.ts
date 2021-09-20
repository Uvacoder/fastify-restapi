import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'
import fetch, { Response } from 'node-fetch'

/**
 * @route GET /photos
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const example: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Record<never, never>,
): Promise<void> => {
  fastify.get(
    '/photos',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const res: Response = await fetch('https://picsum.photos/v2/list')

      reply.code(200).send(res.json())
    },
  )
}

export default example
