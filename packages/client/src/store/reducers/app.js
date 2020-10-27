import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import { appTypes } from '../actions/types'

const initialState = Immutable({
  graph: {},
  cycles: [],
  subCycles: [],
})

export default handleActions({
  [appTypes.getCycles]: (state, { data }) => Immutable(data),
}, initialState)
