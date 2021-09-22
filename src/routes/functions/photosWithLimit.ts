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
 * @route GET /photos/limit/{limit}
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Partial<AutoloadPluginOptions>} opts Opts
 */
const photosWithLimit: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Partial<AutoloadPluginOptions>,
): Promise<void> => {
  fastify.get(
    '/photos/limit/:limit',
    async function (request: FastifyRequest, reply: FastifyReply) {
      const params: RequestParamsDefault | any = request.params
      const limit: number = Number(params.limit)
      if (limit > 0) {
        const photosLimited = photosArray.slice(0, limit)
        const statusCode: number = 200
        reply
          .status(statusCode)
          .header('Content-Type', 'application/json; charset=utf-8')
          .send({ statusCode, data: photosLimited })
      } else {
        reply.status(404).send({
          statusCode: 404,
          error: 'limit must be a number higher than 1',
        })
      }
    },
  )
}

export default photosWithLimit
