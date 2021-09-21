import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'

/**
 * @route GET /example
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const example: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Record<never, never>,
): Promise<void> => {
  fastify.get(
    '/example',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return 'this is an example'
    },
  )
}

export default example
