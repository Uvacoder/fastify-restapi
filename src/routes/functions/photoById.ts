import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
  RequestParamsDefault,
} from 'fastify'
import { AutoloadPluginOptions } from 'fastify-autoload'
import { photosArray } from '../../utils/db/photos'

/**
 * @route GET /photos/{id}
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const photoById: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/photos/:id',
    async function (request: FastifyRequest, reply: FastifyReply) {
      console.log(request.params)
      // It should not be type Any but if it does not have it, it detects it as Unknown.
      const params: RequestParamsDefault | any = request.params
      const id: string = params.id.toString()

      const photo = photosArray.find((photo) => id === photo.id)

      if (photo !== undefined) {
        const statusCode: number = 200
        reply.status(statusCode).send({
          statusCode,
          data: photo,
        })
      } else {
        reply.status(404).send({
          error: 'Photo not found',
        })
      }
    },
  )
}

export default photoById
