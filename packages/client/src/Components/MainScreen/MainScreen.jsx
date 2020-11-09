import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Divider } from '@material-ui/core'

import currencies from '../../assets/currencies.json'
import SearchInput from '../Common/SearchInput'
import CardsView from './CardsView'

const ROWS = 4

const useStyles = makeStyles(({ spacing, measurements }) => ({
  container: {
    width: (measurements.cardSize + spacing(4)) * ROWS + spacing(4),
    maxWidth: '100%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  searchRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `${spacing(3)}px 0 ${spacing(2)}px`,
  },
}), { name: 'MainScreen' })

function MainScreen(props) {
  const classes = useStyles(props)
  const { graph } = props
  const [searchVal, setSearchVal] = useState('')

  const itemList = Object.keys(graph)
    .filter((e) => e.includes(searchVal.toUpperCase())
      || currencies[e].name.toUpperCase().includes(searchVal.toUpperCase()))

  return (
    <div className={classes.container}>
      <div className={classes.searchRow}>
        <SearchInput
          animated
          counter={itemList.length}
          value={searchVal}
          onChange={(val) => setSearchVal(val)}
        />
      </div>
      <Divider />
      <CardsView items={itemList} />
    </div>
  )
}

const mapStateToProps = ({ app: { graph } }) => ({
  graph,
})

export default connect(mapStateToProps)(MainScreen)
