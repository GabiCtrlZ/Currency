import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack'
import { Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import Loader from './Components/Loader'
import { setEnqueueSnackbar } from './lib/snackbar'
import MainRouter from './MainRouter'

const useStyles = makeStyles({
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
  },
}, { name: 'App' })

function App(props) {
  const classes = useStyles(props)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    setEnqueueSnackbar(enqueueSnackbar)
  }, [enqueueSnackbar])

  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <Route path="/">
          <div className={classes.content}>
            <MainRouter />
          </div>
        </Route>
      </Switch>
      <Loader />
    </div>
  )
}

export default connect()(App)
