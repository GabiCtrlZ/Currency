import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import MenuIcon from '@material-ui/icons/Menu'
import {
  IconButton,
  makeStyles,
} from '@material-ui/core'
import { connect } from 'react-redux'
import MoneyIcon from '@material-ui/icons/Money'

import MaxCycleLength from './MaxCycleLength'
import Autocomplete from './Autocomplete'
import WzSearchInput from '../../Common/WzSearchInput'
import currencies from '../../../assets/currencies.json'
import SearchButton from './SearchButton'

const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      color: theme.palette.primary.light,
      background: 'none',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
  },
}), { name: 'CoinDirection' })

function CoinDirections(props) {
  const classes = useStyles()
  const { graph } = props
  const [searchVal, setSearchVal] = useState('')

  const itemList = Object.keys(graph)
    .filter((e) => e.includes(searchVal.toUpperCase())
      || currencies[e].name.toUpperCase().includes(searchVal.toUpperCase()))
    .slice(0, 5)

  const isAutoCompleteOn = searchVal.length >= 1 && !graph[searchVal]

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <IconButton
          color="inherit"
          className={classes.button}
          aria-label="open drawer"
          onClick={() => { }}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.title}>
          Currency directions
        </div>
      </Container>
      <br />
      <Container maxWidth="sm" className={classes.container}>
        <MoneyIcon color="secondary" />
        <div className={classes.title}>
          <WzSearchInput
            value={searchVal}
            onChange={({ target: { value } }) => setSearchVal(value)}
          />
        </div>
      </Container>
      {!isAutoCompleteOn && <MaxCycleLength />}
      {isAutoCompleteOn && <Autocomplete itemList={itemList} setSearchVal={setSearchVal} />}
      {graph[searchVal] && <SearchButton />}
      <br />
    </>
  )
}

const mapStateToProps = ({ app: { graph } }) => ({
  graph,
})

export default connect(mapStateToProps)(CoinDirections)
