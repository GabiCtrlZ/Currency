import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
// import { appTypes } from '../actions/types'

const initialState = Immutable({
  data: {
    dollar: [
      {
        to: 'euro',
        from: 'dollar',
        bank: 'bank1',
        weight: 0.84,
      },
      {
        to: 'nis',
        from: 'dollar',
        bank: 'bank2',
        weight: 3.38,
      },
    ],
    euro: [
      {
        to: 'nis',
        from: 'euro',
        bank: 'bank1',
        weight: 4,
      },
      {
        to: 'dollar',
        from: 'euro',
        bank: 'bank1',
        weight: 1.4,
      },
    ],
    nis: [
      {
        to: 'euro',
        from: 'nis',
        bank: 'bank1',
        weight: 0.25,
      },
      {
        to: 'dollar',
        from: 'nis',
        bank: 'bank2',
        weight: 0.3,
      },
    ],
  },
  cycles: [{
    path:
      [
        { parent: 'dollar', bank: 'bank2', to: 'nis' },
        { parent: 'nis', bank: 'bank1', to: 'euro' },
        { parent: 'euro', bank: 'bank1', to: 'dollar' },
      ],
    profit: '18.30',
  },
  {
    path:
      [{ parent: 'euro', bank: 'bank1', to: 'dollar' }, { parent: 'dollar', bank: 'bank1', to: 'euro' }],
    profit: '17.60',
  },
  {
    path:
      [
        { parent: 'nis', bank: 'bank2', to: 'dollar' },
        { parent: 'dollar', bank: 'bank1', to: 'euro' },
        { parent: 'euro', bank: 'bank1', to: 'nis' },
      ],
    profit: '0.80',
  }],
})

export default handleActions({
}, initialState)
