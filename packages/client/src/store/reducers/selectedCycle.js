import { handleActions } from 'redux-actions'
import { selectedTypes } from '../actions/types'

export default handleActions({
  [selectedTypes.setSelected]: (state, { index }) => index,
}, 2)
