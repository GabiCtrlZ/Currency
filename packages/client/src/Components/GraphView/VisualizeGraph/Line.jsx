import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { HEXAGON, MARKER } from '../../../consts'

const useStyles = makeStyles(({
  transitions: { easing: { easeInOut } },
}) => ({
  container: {
    position: 'absolute',
    width: 1000,
    height: 1000,
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

function Line(props) {
  const classes = useStyles(props)

  const {
    p1, p2, style,
  } = props

  const {
    x: x1, y: y1,
  } = p1


  const {
    x: x2, y: y2,
  } = p2

  const { height, width } = HEXAGON

  const x11 = x1 + (width / 2)
  const y11 = y1 + (height / 2)
  const x22 = x2 + (width / 2)
  const y22 = y2 + (height / 2)

  const xm = ((x11 + x22) / 2)
  const ym = ((y11 + y22) / 2)

  return (
    <svg className={classes.container} style={style} >
      <defs>
        <marker
          id="arrowhead"
          markerWidth={MARKER.length}
          markerHeight={MARKER.length * 0.7}
          refX="0"
          refY={MARKER.length * 0.35}
          orient="auto"
        >
          <polygon points={`0 0, ${MARKER.length} ${MARKER.length * 0.35}, 0 ${MARKER.length * 0.7}`} />
        </marker>
      </defs>
      <polyline
        id="line"
        strokeWidth={MARKER.stroke}
        markerMid="url(#arrowhead)"
        points={`${x11},${y11} ${Math.floor(xm)},${Math.floor(ym)} ${x22},${y22}`}
        stroke="black"
      />
    </svg>
  )
}

export default connect()(Line)
