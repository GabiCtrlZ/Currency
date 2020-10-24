import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flexGrow: 1,
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(6),
  },
}), { name: 'MainScreen' })

function MainScreen(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.container}>
      <div>
        something
      </div>
    </div>
  )
}

export default connect()(MainScreen)
