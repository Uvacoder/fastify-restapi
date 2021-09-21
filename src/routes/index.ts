import {
  FastifyRequest,
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'
import photosRoute from './photos'
import rootRoute from './rootRoute'

/**
 * @route GET /
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const root: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions> | any,
) => {
  rootRoute(fastify, opts)
  photosRoute(fastify, opts)
}
export default root
