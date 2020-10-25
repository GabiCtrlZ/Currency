import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import CyclesHeader from './CyclesHeader'
import CyclesBody from './CyclesBody'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flexGrow: 1,
    color: 'white',
  },
  headerContainer: {
    margin: spacing(4),
  },
}), { name: 'CyclesTable' })

function CyclesTable(props) {
  const classes = useStyles(props)
  const { cycles } = props

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <CyclesHeader cycles={cycles} />
      </div>
      <div>
        <CyclesBody />
      </div>
    </div>
  )
}

const mapStateToProps = ({ app: { cycles } }) => ({
  cycles,
})

export default connect(mapStateToProps)(CyclesTable)
