import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import { appTypes } from '../actions/types'

const initialState = Immutable({
  graph: {},
  cycles: [],
})

export default handleActions({
  [appTypes.getGraph]: (state, { data: { graph } }) => state.set('graph', graph),
  [appTypes.getCycles]: (state, { data: { cycles } }) => state.set('cycles', cycles),
}, initialState)
