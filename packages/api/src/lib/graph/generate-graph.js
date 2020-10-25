const request = require('../request')
const refactorResponse = require('./refactor-response')
const { API_URL, CURRENCIES } = require('../../consts')

module.exports = async (logger) => {
  logger.info('attempting to create graph')

  const values = await Promise.all(CURRENCIES.map((currency) => request({
    logger,
    url: `${API_URL}?base=${currency}`,
    method: 'GET',
  })))

  return values.reduce((pre, { data }) => ({ ...pre, [data.base]: refactorResponse(data) }), {})
}
