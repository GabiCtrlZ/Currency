const findCycles = require('../../lib/find-cycles')

const data = {
  dollar: [
    {
      to: 'euro',
      from: 'dollar',
      bank: 'bank1',
      weight: 0.84,
    },
    {
      to: 'nis',
      from: 'dollar',
      bank: 'bank2',
      weight: 3.38,
    },
  ],
  euro: [
    {
      to: 'nis',
      from: 'euro',
      bank: 'bank1',
      weight: 4,
    },
    {
      to: 'dollar',
      from: 'euro',
      bank: 'bank1',
      weight: 1.4,
    },
  ],
  nis: [
    {
      to: 'euro',
      from: 'nis',
      bank: 'bank1',
      weight: 0.25,
    },
    {
      to: 'dollar',
      from: 'nis',
      bank: 'bank2',
      weight: 0.3,
    },
  ],
}

module.exports = async (req, res) => {
  const {
    logger,
  } = req

  try {
    return res.json({
      success: true,
      data: Object.keys(data).map((coin) => findCycles(data, coin)),
    })
  } catch (e) {
    logger.error({ stack: e.stack }, `error with route ${req.url}`, { message: e.message })

    return res.status(500).json({
      success: false,
    })
  }
}
