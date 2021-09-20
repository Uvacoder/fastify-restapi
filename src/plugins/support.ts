import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

const support = fp(async function (fastify: FastifyInstance, opts: unknown) {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
})

export default support
