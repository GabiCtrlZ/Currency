const { CURRENCIES } = require('../../consts')

module.exports = async (req, res) => {
  const {
    logger,
  } = req

  try {
    return res.json({
      success: true,
      data: {
        graph: CURRENCIES.reduce((prev, key) => ({ ...prev, [key]: key }), {}),
      },
    })
  } catch (e) {
    logger.error({ stack: e.stack }, `error with route ${req.url}`, { message: e.message })

    return res.status(500).json({
      success: false,
    })
  }
}
