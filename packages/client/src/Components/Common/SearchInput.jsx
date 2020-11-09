import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import ClearIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles((theme) => ({
  input: {
    color: theme.palette.action.active,
    border: `1px solid ${theme.palette.action.disabled}`,
    padding: `0 ${theme.spacing(2)}px`,
    borderRadius: 32,
    minWidth: ({ minWidth = 400 }) => minWidth,
    background: 'white',
    transition: 'border 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, flex-grow 200ms cubic-bezier(0.4, 0, 1, 1) 0ms',
    marginInlineEnd: ({ animated }) => (animated ? `${theme.spacing(4)}px` : 0),
  },
  focus: {
    borderColor: theme.palette.secondary.main,
    '&$animated $clearIcon': {
      display: 'none',
    },
  },
  animated: {
    flexGrow: 1,
  },
  withCounter: {
    paddingRight: 6,
  },
  clearIcon: {
    width: 18,
    height: 18,
    cursor: 'pointer',
    padding: 2,
    borderRadius: '50%',
    transition: `background 0.2s ${theme.transitions.easing.sharp}`,
    '&:hover': {
      background: theme.palette.action.disabledBackground,
    },
    '&:active': {
      transition: 'none',
      background: theme.palette.action.disabled,
    },
  },
  counter: {
    minWidth: 24,
    height: 24,
    padding: '0px 4px',
    fontSize: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    background: theme.palette.action.disabled,
    color: 'white',
    marginLeft: theme.spacing(0.5),
  },
}), { name: 'SearchInput' })

function SearchInput(props) {
  const classes = useStyles(props)
  const {
    value, onChange = () => { }, animated, counter, ...otherProps
  } = props
  const withCounter = counter !== undefined
  return (
    <Input
      value={value}
      placeholder="Search"
      onChange={({ target: { value: newVal } }) => onChange(newVal)}
      classes={{
        root: classNames(classes.input, { [classes.withCounter]: withCounter }),
        focused: classNames(classes.focus, { [classes.animated]: animated }),
      }}
      startAdornment={(
        <InputAdornment position="start">
          <SearchIcon color="disabled" />
        </InputAdornment>
      )}
      endAdornment={(
        <InputAdornment position="end" onClick={() => onChange('')}>
          {value && <ClearIcon classes={{ root: classes.clearIcon }} />}
          {withCounter && <div className={classes.counter}>{counter}</div>}
        </InputAdornment>
      )}
      disableUnderline
      {...otherProps}
    />
  )
}

export default SearchInput
