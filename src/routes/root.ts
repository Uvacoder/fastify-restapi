import { FastifyReply, FastifyRequest } from 'fastify'

/**
 *
 * @route GET /
 * @param {Request} req
 * @param {Reply} reply
 */
export const rootRoute = (req: FastifyRequest, reply: FastifyReply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      message: 'Welcome to the Fastify API',
    })
}
