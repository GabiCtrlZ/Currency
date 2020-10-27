import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

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
  tableContainer: {
    flexShrink: 1,
    height: '45vh',
    flexGrow: 1,
    userSelect: 'none',
    padding: 4,
    borderBottom: `1px solid ${palette.divider}`,
    '& table': {
      borderSpacing: '0px 4px',
    },
    '& tr': {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '& td, & th': {
      border: 'none',
      padding: `${spacing()}px ${spacing(2)}px`,
      '&:first-child': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      '&:last-child': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
    },
    '& th': {
      border: 'none',
      padding: `${spacing()}px ${spacing(2)}px`,
      background: palette.secondary.dark,
      color: fade('#fff', 0.8),
      fontWeight: 'bold',
      top: -4,
    },
  },
  alternateRowColor: {
    '&:nth-of-type(even)': {
      backgroundColor: fade(palette.primary.light, 0.2),
    },
  },
}), { name: 'CyclesBodyTable' })

function CyclesBodyTable(props) {
  const classes = useStyles(props)
  const {
    valuesList,
  } = props

  return (
    <div className={classes.container}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell
                align="left"
              >
                Coin
              </TableCell>
              <TableCell
                align="left"
              >
                Profit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {valuesList.map(({ path, profit }) => (
              <TableRow
                role="checkbox"
                tabIndex={-1}
                key={profit}
                classes={{ root: classes.alternateRowColor }}
              >
                <TableCell align="center" style={{ width: 42 }} />
                <TableCell>
                  <div>{path[0].parent}</div>
                </TableCell>
                <TableCell>
                  <div>{profit}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default connect()(CyclesBodyTable)
