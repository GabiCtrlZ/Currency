import React from 'react'
import Container from '@material-ui/core/Container'
import LinearScaleIcon from '@material-ui/icons/LinearScale'
import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  formControl: {
    margin: `${theme.spacing(2)}px 0 ${theme.spacing()}px ${theme.spacing(4)}px`,
    minWidth: 150,
  },
}), { name: 'MaxCycleLength' })

export default function MaxCycleLength() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="sm" className={classes.container}>
        <LinearScaleIcon style={{ color: 'gray' }} />
        <FormControl className={classes.formControl}>
          <Select
            value=""
            disableUnderline
            onChange={() => { }}
            displayEmpty
            inputProps={{ 'aria-label': 'Useless select' }}
          >
            <MenuItem value="">
              Useless select
            </MenuItem>
            <MenuItem value={Infinity}>Why is it here?</MenuItem>
            <MenuItem value={30}>Did The developer simply forgot?</MenuItem>
            <MenuItem value={10}>Or was there a purpose</MenuItem>
            <MenuItem value={5}>For this select</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}
