module.exports = ({ rates, base }) => (
  Object
    .entries(rates)
    .map(([currency, weight]) => ({
      to: currency,
      from: base,
      bank: 'Bank',
      weight,
    }))
)
