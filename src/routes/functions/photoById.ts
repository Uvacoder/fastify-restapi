import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
  RequestParamsDefault,
} from 'fastify'

/**
 * @route GET /photos/{id}
 * @param {FastifyInstance} fastify Fastify Instance
 * @param {Record<never, never>} opts Opts
 */
const photoById: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts?: Record<never, never>,
): Promise<void> => {
  fastify.get(
    '/photos/:id',
    async function (request: FastifyRequest, reply: FastifyReply) {
      console.log(request.params)
      const params: RequestParamsDefault = request.params

      reply.send({
        id: params?.id,
      })
    },
  )
}

export default photoById
