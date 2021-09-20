import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export interface SupportPluginOptions {
  // Specify Support plugin options here
}

export default fp<SupportPluginOptions>(async function (
  fastify: FastifyInstance,
  opts: unknown,
) {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string
  }
}
