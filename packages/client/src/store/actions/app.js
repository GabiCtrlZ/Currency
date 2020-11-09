import { appTypes, API } from './types'
import store from '../store'

const getGraph = () => ({
  type: API,
  api: {
    method: 'GET',
    url: '/currency/get-graph',
    onSuccess: (data) => store.dispatch({
      type: appTypes.getGraph,
      data,
    }),
  },
})

const getCycles = (currency) => ({
  type: API,
  api: {
    method: 'POST',
    url: '/currency/get-cycles',
    data: { currency },
    onSuccess: (data) => store.dispatch({
      type: appTypes.getCycles,
      data,
    }),
  },
})

export {
  getGraph,
  getCycles,
}
