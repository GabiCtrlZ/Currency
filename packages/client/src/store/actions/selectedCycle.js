/* eslint-disable import/prefer-default-export */
import { selectedTypes } from './types'

const setSelectedCycle = (index) => ({
  type: selectedTypes.setSelected,
  index,
})

export {
  setSelectedCycle,
}
