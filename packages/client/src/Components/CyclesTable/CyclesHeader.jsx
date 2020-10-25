import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    marginBottom: spacing(2),
  },
  total: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: spacing(),
  },
  length: {
    fontWeight: 'bold',
    fontSize: 30,
  },
}), { name: 'CyclesTable' })

function CyclesTable(props) {
  const classes = useStyles(props)
  const { cycles } = props

  return (
    <div>
      <div className={classes.container}>
        <Typography className={classes.total}>
          Total Cycles
        </Typography>
        <Typography className={classes.length}>
          {cycles.length}
        </Typography>
      </div>
      <hr />
    </div>
  )
}

export default connect()(CyclesTable)
