'use strict'

const fetch = require('node-fetch')

/**
 *
 * @route GET /photos
 * @param {Request} req
 * @param {Reply} reply
 * @param {FastifyInstance} fastify
 */
module.exports = async (req, reply, fastify) => {
  const res = await fetch('https://picsum.photos/v2/list')

  reply.code(200).send(res)
}
