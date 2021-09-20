import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import { SensibleOptions } from 'fastify-sensible'

/**
 * This plugins adds some utilities to handle http errors
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<SensibleOptions>(async function (
  fastify: FastifyInstance,
  opts: unknown,
) {
  fastify.register(require('fastify-sensible'), {
    errorHandler: false,
  })
})
