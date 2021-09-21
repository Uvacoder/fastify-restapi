import {
  FastifyRequest,
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'
import photosRoute from './photos'

/**
 * @route GET /
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const root: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions> | any,
) => {
  photosRoute(fastify, opts)

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
