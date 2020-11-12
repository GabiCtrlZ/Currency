import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { get } from 'lodash'

import currencies from '../../assets/currencies.json'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    boxShadow: 'none',
    background: theme.palette.background.default,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  currencyName: {
    display: 'inline-block',
    position: 'absolute',
    right: 110,
    fontSize: 12,
    color: theme.palette.action.disabled,
  },
}), { name: 'WzSearchInput' })

export default function WzSearchInput(props) {
  const classes = useStyles()
  const { value, onChange } = props

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        value={value}
        onChange={onChange}
        placeholder="Enter currency"
        inputProps={{ 'aria-label': 'currency initials' }}
      />
      <div className={classes.currencyName}>
        {get(currencies[value], 'name', '')}
      </div>
      <IconButton type="submit" disabled className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
