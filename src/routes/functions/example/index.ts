import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'

/**
 * @route GET /example
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Partial<AutoloadPluginOptions>} opts Opts
 */
const example: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/example',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return 'this is an example'
    },
  )
}

export default example
