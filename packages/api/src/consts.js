require('dotenv').config()

const packagejson = require('../package.json')

const {
  PORT,
  LOCAL_DEV,
  SECRET = 'defaultSecret',
  DISABLE_COOKIE_SECURITY = false,
  API_URL,
  CLIENT_BUILD_PATH,
} = process.env

const COOKIE_NAME = process.env.COOKIE_NAME || 'default-App'

const CURRENCIES = [
  'CAD', 'HKD', 'ISK', 'PHP', 'DKK',
  'HUF', 'CZK', 'GBP', 'RON', 'SEK',
  'IDR', 'INR', 'BRL', 'RUB', 'HRK',
  'JPY', 'THB', 'CHF', 'EUR', 'MYR',
  'BGN', 'TRY', 'CNY', 'NOK', 'NZD',
  'ZAR', 'USD', 'MXN', 'SGD', 'AUD',
  'ILS', 'KRW', 'PLN',
]

const COOKIE_OPTIONS = {
  maxAge: 30 * 24 * 60 * 60 * 1000,
  httpOnly: true,
}

module.exports = {
  PORT,
  COOKIE_NAME,
  COOKIE_OPTIONS,
  LOCAL_DEV,
  DISABLE_COOKIE_SECURITY,
  API_URL,
  CURRENCIES,
  SECRET,
  CLIENT_BUILD_PATH,
  SERVICE_NAME: `${packagejson.name}:${packagejson.version}`,
}
