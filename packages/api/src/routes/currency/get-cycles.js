const Joi = require('@hapi/joi')

const findCycles = require('../../lib/cycles/find-cycles')
const subCycles = require('../../lib/cycles/sub-cycles')
const generateGraph = require('../../lib/graph/generate-graph')

const schema = Joi.object({
  currency: Joi.string().optional(),
})

let graph = {}
let day
let cycles = []
let sub = []

module.exports = async (req, res) => {
  const {
    logger,
    body,
  } = req

  try {
    Joi.assert(body, schema)

    const { currency } = body

    const today = new Date().getDay()
    if (today === day) {
      logger.info('graph and cycle already exists in cache, returning caches values')

      return res.json({
        success: true,
        data: {
          cycles: [
            ...cycles.filter(({ path }) => path[0].parent === currency),
            ...sub.filter(({ path }) => path[0].parent === currency),
          ],
        },
      })
    }

    logger.info('renewing graph and cycles')

    graph = await generateGraph(logger)
    cycles = Object.keys(graph).map((coin) => findCycles(graph, coin))
    sub = cycles.map(({ path }) => subCycles(graph, path)).reduce((prev, curr) => [...prev, ...curr], [])
    day = today

    return res.json({
      success: true,
      data: {
        cycles: [
          ...cycles.filter(({ path }) => path[0].parent === currency),
          ...sub.filter(({ path }) => path[0].parent === currency),
        ],
      },
    })
  } catch (e) {
    logger.error({ stack: e.stack }, `error with route ${req.url}`, { message: e.message })

    return res.status(500).json({
      success: false,
    })
  }
}
