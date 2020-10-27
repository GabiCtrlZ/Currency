import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Hexagon from 'react-hexagon'
import { HEXAGON } from '../../consts'

const useStyles = makeStyles(({
  transitions: { easing: { easeInOut } },
}) => ({
  container: {
    height: HEXAGON.height,
    width: HEXAGON.width,
    zIndex: 1,
    animation: `$ease-in 500ms ${easeInOut} backwards`,
  },
  '@keyframes ease-in': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-16px)',
    },
    '100%': {
      opacity: 1,
      transform: 'none',
    },
  },
}), { name: 'CustomHexagon' })

function CustomHexagon(props) {
  const classes = useStyles(props)
  const { style } = props

  return (
    <div className={classes.container} style={style}>
      <Hexagon
        style={{
          stroke: '#fff',
          strokeWidth: 40,
          boxShadow: '0 0 10px rgba(255,255,255,1)',
        }}
        backgroundImage="https://www.adorama.com/images/Large/lecc40c.jpg"
      />
    </div>
  )
}

export default connect()(CustomHexagon)
