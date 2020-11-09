import React from 'react'
import { useHistory } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { connect } from 'react-redux'
import Logo from '../assets/Icons/Logo'

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: theme.measurements.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    boxShadow: theme.shadows[6],
    zIndex: 3,
  },
  accountIcon: {
    color: 'white',
    borderColor: fade('#FFF', 0.5),
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
    borderRadius: 8,
    textTransform: 'none',
  },
  logoContainer: {
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    userSelect: 'none',
    '& > div': {
      marginTop: 4,
      borderTop: '1px solid',
      letterSpacing: '1.5px',
      fontSize: 20,
    },
  },
}), { name: 'Header' })

function Header(props) {
  const classes = useStyles(props)
  const history = useHistory()

  return (
    <AppBar
      color="primary"
      variant="outlined"
      position="static"
      classes={{ root: classes.appBar }}
    >
      <div
        role="button"
        tabIndex={0}
        className={classes.logoContainer}
        onClick={() => history.push('/')}
      >
        <Logo />
        <div>Currency</div>
      </div>
    </AppBar>
  )
}

export default connect()(Header)
