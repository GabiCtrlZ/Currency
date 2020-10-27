import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'

import PlotPointAndLine from './VisualizeGraph/PlotPointAndLine'
import graphPositions from '../../lib/graph-positions'
import { 
  HEXAGON,
  GRAPH_RATIOS
 } from '../../consts'

const useStyles = makeStyles(() => ({
  container: {
    width: `${GRAPH_RATIOS.width * 100}vw`,
    height: `${GRAPH_RATIOS.height * 100}vh`,
    position: 'relative',
  },
}), { name: 'GraphBody' })

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

function GraphBody(props) {
  const classes = useStyles(props)
  const { cycle } = props
  const { height, width } = useWindowSize()

  const points = graphPositions(cycle.length, HEXAGON.width / 2, HEXAGON.height / 2, width * GRAPH_RATIOS.width, height * GRAPH_RATIOS.height)

  return (
    <Container>
      <div className={classes.container}>
        {cycle.map((e, i) => (
          <PlotPointAndLine
            key={e}
            index={i}
            p1={points[i % cycle.length]}
            p2={points[(i + 1) % cycle.length]}
          />
        ))}
      </div>
    </Container>
  )
}

const mapStateToProps = ({ app, selectedCycle }) => ({
  cycle: app.cycles.length ? app.cycles[selectedCycle].path : [],
})

export default connect(mapStateToProps)(GraphBody)
