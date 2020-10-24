const axios = require('axios').default

module.exports = async (url, data, method, option) => {
  try {
    const res = await axios({
      url,
      data,
      method,
      ...option,
    })
    return res
  } catch (e) {
    console.log(e)
    return e
  }
}
