import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import GraphBody from './GraphBody'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flexGrow: 1,
  },
}), { name: 'GraphView' })

function GraphView(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.container}>
      <div style={{ height: 50 }}>
        header
      </div>
      <GraphBody />
    </div>
  )
}

export default connect()(GraphView)
