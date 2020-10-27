import React from 'react'
import { connect } from 'react-redux'

import Hexagon from '../../Common/Hexagon'
import Line from './Line'

const animationDelay = 150

function PlotPointAndLine(props) {
  const {
    p1, p2, index,
  } = props

  const {
    x, y,
  } = p1

  return (
    <>
      <Hexagon style={{
        position: 'absolute',
        top: y,
        left: x,
        animationDelay: `${animationDelay * index}ms`
      }}
      />
      <Line
        p1={p1}
        p2={p2}
        style={{ animationDelay: `${animationDelay * index + (animationDelay * 1.5)}ms` }}
      />
    </>
  )
}

export default connect()(PlotPointAndLine)
