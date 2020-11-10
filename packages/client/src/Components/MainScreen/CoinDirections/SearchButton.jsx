import React from 'react'
import {
  Divider,
  makeStyles,
  Tooltip,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  searchButton: {
    marginTop: theme.spacing(2),
    width: 130,
    alignSelf: 'flex-end',
  },
  searchButtonText: {
    display: 'inline-flex',
    alignItems: 'center',
    border: 0,
    borderRadius: 20,
    background: theme.palette.primary.main,
    padding: '0 20px',
    fontFamily: 'Poppins,Rubik,sans-serif',
    fontSize: '13px',
    lineHeight: '40px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    color: theme.palette.background.paper,
  },
}), { name: 'SearchButton' })

const classesPrefix = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-disableElevation'

export default function SearchButton() {
  const classes = useStyles()

  return (
    <>
      <Divider />
      <Tooltip
        title="Search for cycles containing selected coin"
        arrow
        placement="top"
      >
        <button
          type="button"
          className={`${classesPrefix} ${classes.searchButton}`}
        >
          <span className={classes.searchButtonText}>
            Search
          </span>
        </button>
      </Tooltip>
    </>
  )
}
