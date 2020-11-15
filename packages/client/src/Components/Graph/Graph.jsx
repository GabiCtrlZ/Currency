import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { Network, Node, Edge } from 'react-vis-network'

const options = {
  layout: {
    hierarchical: false,
    randomSeed: 3,
  },
  nodes: {
    shape: 'hexagon',
  },
  height: `${window.innerHeight - 64}px`,
  width: `${window.innerWidth - 386}px`,
  physics: true,
  edges: {
    smooth: true,
    color: 'rgb(100,100,100)',
    arrows: 'to',
  },
}

function Graph(props) {
  const { graph: { nodes, edges } } = props
  return (
    <Network options={options}>
      {nodes.map(({ id, label }) => (
        <Node key={id} id={id} label={label} />
      ))}
      {edges.map(({ from, to }, i) => (
        <Edge key={`${from}:${to}`} id={i + 1} from={from} to={to} />
      ))}
    </Network>
  )
}

const mapStateToProps = ({ app: { cycles }, selectedCycle }) => ({
  path: get(cycles, [selectedCycle, 'path'], []),
})

export default connect(mapStateToProps)(Graph)
