import React from 'react'
import {
  Divider,
  makeStyles,
  Tooltip,
} from '@material-ui/core'
import { connect } from 'react-redux'

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
    '&[aria-disabled="true"]': {
      background: theme.palette.grey[200],
      color: theme.palette.grey[400],
      cursor: 'default',
    },
  },
}), { name: 'SearchButton' })

const classesPrefix = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-disableElevation'

function SearchButton(props) {
  const classes = useStyles()
  const { onClick, isLoadingRoutes } = props

  return (
    <>
      <Divider />
      <Tooltip
        title={isLoadingRoutes ? '' : 'Search for cycles containing selected coin'}
        arrow
        placement="top"
      >
        <button
          type="button"
          onClick={onClick}
          disabled={isLoadingRoutes}
          className={`${classesPrefix} ${classes.searchButton}`}
        >
          <span
            className={classes.searchButtonText}
            aria-disabled={isLoadingRoutes}
          >
            Search
          </span>
        </button>
      </Tooltip>
    </>
  )
}

const mapStateToProps = ({ app: { isLoadingRoutes } }) => ({
  isLoadingRoutes,
})

export default connect(mapStateToProps)(SearchButton)
