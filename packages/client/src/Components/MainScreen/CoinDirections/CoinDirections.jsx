import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import MenuIcon from '@material-ui/icons/Menu'
import {
  Divider,
  IconButton,
  makeStyles,
  Switch,
} from '@material-ui/core'
import { connect } from 'react-redux'
import MoneyIcon from '@material-ui/icons/Money'
import AdjustIcon from '@material-ui/icons/Adjust'

import MaxCycleLength from './MaxCycleLength'
import Autocomplete from './Autocomplete'
import WzSearchInput from '../../Common/WzSearchInput'
import currencies from '../../../assets/currencies.json'
import SearchButton from './SearchButton'
import { getCycles, toggleLoading } from '../../../store/actions/app'

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
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  title: {
    margin: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchContainer: {
    margin: 'auto',
  },
  switch: {
    marginLeft: theme.spacing(10),
  },
  divider: {
    margin: `${theme.spacing(3)}px ${theme.spacing(7)}px 0 ${theme.spacing(10)}px`,
  },
}), { name: 'CoinDirection' })

function CoinDirections(props) {
  const classes = useStyles()
  const { graph, dispatch } = props
  const [searchVal, setSearchVal] = useState('')
  const [filterByCurrency, setFilterByCurrency] = useState(true)

  const searchRoutes = () => {
    dispatch(toggleLoading())
    setTimeout(() => {
      dispatch(getCycles(searchVal, filterByCurrency))
    }, 700)
  }

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
      <Container maxWidth="sm" className={classes.filterContainer}>
        <AdjustIcon color="secondary" />
        <div className={classes.switchContainer}>
          Filter by currency
          <Switch
            checked={filterByCurrency}
            onChange={({ target: { checked } }) => {
              if (!checked) setSearchVal('')
              setFilterByCurrency(checked)
            }}
            className={classes.switch}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
      </Container>
      {filterByCurrency && (
        <>
          <Container maxWidth="sm" className={classes.container}>
            <MoneyIcon color="secondary" />
            <div className={classes.title}>
              <WzSearchInput
                value={searchVal}
                onChange={({ target: { value } }) => setSearchVal(value)}
              />
            </div>
          </Container>
          <Divider className={classes.divider} />
        </>
      )}
      {!isAutoCompleteOn && <MaxCycleLength />}
      {isAutoCompleteOn && <Autocomplete itemList={itemList} setSearchVal={setSearchVal} />}
      {(!filterByCurrency || graph[searchVal]) && <SearchButton onClick={searchRoutes} />}
      <br />
    </>
  )
}

const mapStateToProps = ({ app: { graph } }) => ({
  graph,
})

export default connect(mapStateToProps)(CoinDirections)
