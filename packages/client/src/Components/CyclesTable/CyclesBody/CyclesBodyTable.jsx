import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { setSelectedCycle } from '../../../store/actions/selectedCycle'

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    flexGrow: 1,
    padding: `${spacing(1)}px ${spacing(2)}px 0`,
    '& > *': {
      flexShrink: 0,
    },
  },
  list: {
    // background: 'white',
    borderRadius: 8,
    marginTop: spacing(2),
    padding: 0,
    overflowY: 'auto',
    marginTop: 2,
  },
  listItem: {
    transition: 'all 150ms ease-in-out',
  },
  header: {
    background: `linear-gradient(to right, ${palette.primary.main}, ${palette.primary.light})`,
  },
  selected: {
    color: 'white',
    background: `linear-gradient(to right, ${palette.secondary.main}, ${palette.secondary.light})`,
    '&:not(:last-child)': {
      borderBottom: '1px solid',
    },
    '&:hover': {
      filter: 'grayscale(0.5)',
    },
  },
}), { name: 'CyclesBodyTable' })

function CyclesBodyTable(props) {
  const classes = useStyles(props)
  const {
    valuesList,
    dispatch,
    rowsPerPage,
    page,
    selectedCycle,
  } = props

  return (
    <div className={classes.container}>
      <List classes={{ root: classes.list }}>
        <ListItem
          classes={{
            root: `${classes.listItem} ${classes.header}`,
          }}
        >
          <ListItemText>
            <span>Coin</span>
          </ListItemText>
          <ListItemText>
            <span>Profit</span>
          </ListItemText>
          <ListItemText>
            <span>Cycle Length</span>
          </ListItemText>
        </ListItem>
        {valuesList.map(({ path, profit }, i) => (
          <ListItem
            key={profit}
            button
            selected={(i + (page * rowsPerPage)) === selectedCycle}
            onClick={() =>  dispatch(setSelectedCycle(i + (page * rowsPerPage)))}
            classes={{
              root: classes.listItem,
              selected: classes.selected,
            }}
          >
            {/* <ListItemIcon>
              {renderIcon(path[0].parent)}
            </ListItemIcon> */}
            <ListItemText>
              <span>{path[0].parent}</span>
            </ListItemText>
            <ListItemText>
              <span>{profit}</span>
            </ListItemText>
            <ListItemText>
              <span>{path.length}</span>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = ({ selectedCycle }) => ({
  selectedCycle,
})

export default connect(mapStateToProps)(CyclesBodyTable)
