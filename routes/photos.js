const photos = require('../utils/db/photos')
const S = require('fluent-json-schema')

const photoSchema = S.object()
  .prop('id', S.number())
  .prop('title', S.string())
  .prop('description', S.string())
  .prop('url', S.string())
  .prop('thumbnailUrl', S.string())

/**
 *
 * @route GET /photos
 * @param {Request} req
 * @param {Reply} reply
 * @param {FastifyInstance} fastify
 */
module.exports = (req, reply, fastify) => {
  fastify.addSchema(photoSchema)

  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(photos)
}
