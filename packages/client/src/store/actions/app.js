/* eslint-disable import/prefer-default-export */
import { appTypes, API } from './types'
import store from '../store'

const getCycles = () => ({
  type: API,
  api: {
    method: 'GET',
    url: '/currency/get-cycles',
    onSuccess: (data) => store.dispatch({
      type: appTypes.getCycles,
      data,
    }),
  },
})

export {
  getCycles,
}
