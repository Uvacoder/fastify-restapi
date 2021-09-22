import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'
import { photosArray } from '../../utils/db/photos'

/**
 * @route GET /photos/downloadUrl
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Partial<AutoloadPluginOptions>} opts Opts
 */
const photosByUrl: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/photos/url',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const photosUrl = photosArray.map((photo) => ({
        id: photo.id,
        download_url: photo.download_url,
      }))
      const statusCode: number = 200
      reply
        .status(statusCode)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
          statusCode,
          data: photosUrl,
        })
    },
  )
}

export default photosByUrl
