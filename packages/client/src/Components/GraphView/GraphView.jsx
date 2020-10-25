import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

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
      Graph View
    </div>
  )
}

export default connect()(GraphView)
