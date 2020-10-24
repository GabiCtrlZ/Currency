import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import CyclesTable from '../CyclesTable/CyclesTable'
import GraphView from '../GraphView/GraphView'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flexGrow: 1,
  },
}), { name: 'MainScreen' })

function MainScreen(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <CyclesTable />
        </Grid>
        <Grid item xs={6}>
          <GraphView />
        </Grid>
      </Grid>
    </div>
  )
}

export default connect()(MainScreen)
