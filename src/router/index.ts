import { FastifyInstance, FastifyPluginAsync } from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'

import photosRoute from './routes/photos'
import rootRoute from './routes/rootRoute'
import photoById from './routes/photoById'
import photosWithLimit from './routes/photosWithLimit'
import getPhotosByUrl from './routes/getPhotosUrl'

/**
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
  getPhotosByUrl(fastify, opts)
}

export default root
