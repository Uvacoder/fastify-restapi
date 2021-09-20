import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify'
import fetch from 'node-fetch'

/**
 *
 * @route GET /photos
 * @param {Request} req
 * @param {Reply} reply
 * @param {FastifyInstance} fastify
 */
export const photosRoute = async (
  req: FastifyRequest,
  reply: FastifyReply,
  fastify: FastifyInstance,
) => {
  const res = await fetch('https://picsum.photos/v2/list')

  reply.code(200).send(res)
}
