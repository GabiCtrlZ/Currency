import React from 'react'
import { get } from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import { Divider } from '@material-ui/core'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CoinDirections from './CoinDirections/CoinDirections'
import Routes from './Routes/Routes'
import Graph from '../Graph/Graph'

import graphFormat from '../../lib/graph-format'
import createInitialGraph from '../../lib/create-initial-graph'

const drawerWidth = 386

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '2px 3px 8px #888888',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  divider: {
    height: theme.spacing(),
  },
  header: {
    color: 'white',
  },
}), { name: 'SearchDrawer' })

function SearchDrawer(props) {
  const classes = useStyles()
  const { path, graph } = props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.header}>
            Interactive graph view
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <CoinDirections />
        <Divider className={classes.divider} />
        <Routes />
      </Drawer>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Graph graph={graphFormat(path) || createInitialGraph(Object.keys(graph))} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ app: { graph, cycles }, selectedCycle }) => ({
  path: get(cycles, [selectedCycle, 'path'], []),
  graph,
})

export default connect(mapStateToProps)(SearchDrawer)
