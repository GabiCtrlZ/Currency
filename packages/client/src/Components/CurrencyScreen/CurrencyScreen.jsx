import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import CyclesTable from '../CyclesTable/CyclesTable'
import GraphView from '../GraphView/GraphView'
import { getCycles } from '../../store/actions/app'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flexGrow: 1,
  },
}), { name: 'CurrencyScreen' })

function CurrencyScreen(props) {
  const classes = useStyles(props)
  const { dispatch } = props
  const { params: { id } } = useRouteMatch('/currency/:id')

  useEffect(() => {
    const fun = async () => {
      dispatch(getCycles(id))
    }
    fun()
  }, [])

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

export default connect()(CurrencyScreen)
