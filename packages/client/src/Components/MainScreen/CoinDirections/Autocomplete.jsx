import React from 'react'
import { get } from 'lodash'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

import currencies from '../../../assets/currencies.json'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  listItem: {
    borderTop: `1px solid ${theme.palette.action.disabled}`,
  },
}), { name: 'Autocomplete' })

export default function Autocomplete(props) {
  const classes = useStyles()
  const { itemList, setSearchVal } = props

  return (
    <>
      <List className={classes.container} aria-label="autocomplete list">
        {itemList.map((item) => (
          <ListItem
            key={item}
            button
            onClick={() => setSearchVal(item)}
            className={classes.listItem}
          >
            <ListItemIcon>
              {get(currencies[item], 'symbol_native', '')}
            </ListItemIcon>
            <ListItemText primary={item} />
            {get(currencies[item], 'name', '')}
          </ListItem>
        ))}
      </List>
    </>
  )
}
