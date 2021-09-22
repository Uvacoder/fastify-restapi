import { FastifyInstance, FastifyPluginAsync } from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'

import photosRoute from './functions/photos'
import rootRoute from './functions/rootRoute'
import photoById from './functions/photoById'
import photosWithLimit from './functions/photosWithLimit'
import photosByUrl from './functions/photosByDownloadUrl'

/**
 * @route GET /
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Partial<AutoloadPluginOptions>} opts Opts
 */
const root: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions> | any,
) => {
  rootRoute(fastify, opts)
  photosRoute(fastify, opts)
  photosWithLimit(fastify, opts)
  photoById(fastify, opts)
  photosByUrl(fastify, opts)
}
export default root
