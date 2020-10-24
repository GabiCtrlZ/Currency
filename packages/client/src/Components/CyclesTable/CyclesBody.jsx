import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%',
    backgroundColor: palette.background.default,
  },
  selected: {
    backgroundColor: palette.background.paper,
  },
  listItem: {
    minHeight: 85,
    '&:hover': {
      backgroundColor: palette.background.paper,
    },
  },
}), { name: 'CyclesBody' })

export default () => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          className={selectedIndex === 0 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          className={selectedIndex === 1 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
        <ListItem
          button
          className={selectedIndex === 2 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          className={selectedIndex === 3 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
        <ListItem
          button
          className={selectedIndex === 3 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
        <ListItem
          button
          className={selectedIndex === 3 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
        <ListItem
          button
          className={selectedIndex === 3 ? `${classes.listItem} ${classes.selected}` : classes.listItem}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  )
}
