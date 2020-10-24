const request = require('./request')
const refactorResponse = require('./refactor-response')

module.exports = async () => {
  const currencies = ['EUR', 'USD', 'ILS', 'GBP', 'JPY', 'PLN', 'NZD', 'AUD', 'CZK', 'KRW']
  const baseUrl = 'https://api.exchangeratesapi.io/latest'
  const graph = {}

  return Promise
    .all(currencies
      .map((currency) => (
        request(
          `${baseUrl}?base=${currency}`,
          {},
          'GET',
          {},
        )
      ))).then((values) => {
        values.forEach(({ data }) => { graph[data.base] = refactorResponse(data) })
        return graph
      }).catch(e => {
        console.log(e)
        return {}
      })

}
