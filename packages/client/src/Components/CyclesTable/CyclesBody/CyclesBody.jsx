import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
// import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { TablePagination } from '@material-ui/core'
import CyclesBodyTable from './CyclesBodyTable'

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    margin: spacing(2),
    padding: spacing(2),
  },
  searchRow: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    background: palette.background.default,
    paddingBottom: spacing(),
  },
}), { name: 'CyclesBody' })

function CyclesBody(props) {
  const classes = useStyles(props)
  const { cycles = [] } = props
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  function handleSelectToggle(checked, valueId) {
    setSelected((currValue) => {
      if (checked) return [...currValue, valueId]
      return [...currValue].filter((id) => id !== valueId)
    })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const pageValues = () => cycles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <div className={classes.container}>
      <div className={classes.searchRow}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={cycles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
      <Divider />
      <CyclesBodyTable
        valuesList={pageValues()}
        selectedRows={selected}
        onSelectToggle={handleSelectToggle}
      />
    </div>
  )
}

const mapStateToProps = ({ app }) => ({
  cycles: app.cycles,
})

export default connect(mapStateToProps)(CyclesBody)
