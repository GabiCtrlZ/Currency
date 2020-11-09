import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useHistory } from 'react-router-dom'
import StarIcon from '@material-ui/icons/Explore'
import { connect } from 'react-redux'

import currencies from '../../assets/currencies.json'

const useStyles = makeStyles(({
  palette, spacing, shadows, measurements,
  transitions: { duration: { standard }, easing: { easeInOut } },
}) => ({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    flexShrink: 1,
    padding: spacing(2),
    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent',
    },
  },
  paper: {
    position: 'relative',
    margin: spacing(2),
    width: measurements.cardSize,
    minHeight: measurements.cardSize,
    alignItems: 'center',
    padding: spacing(3),
    cursor: 'pointer',
    transition: `all ${standard}ms ${easeInOut}`,
    color: palette.action.active,
    animation: `$card-effect 500ms ${easeInOut} backwards`,
    '&:hover': {
      boxShadow: shadows[6],
      transform: 'scale(1.05)',
      '& $btnContainer': {
        maxHeight: 54,
        '& button': {
          opacity: 1,
          right: 0,
          transitionDelay: '200ms',
        },
      },
    },
  },
  language: {
    position: 'absolute',
    top: 0,
    fontSize: 20,
    fontWeight: 'bold',
    left: spacing(1),
    opacity: 0.5,
  },
  icon: {
    width: 56,
    height: 56,
    color: 'inherit',
    marginBottom: spacing(2),
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.text.primary,
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'center',
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    marginTop: spacing(2),
    color: palette.text.secondary,
    '& svg': {
      marginRight: spacing(),
    },
  },
  menu: {
    position: 'absolute',
    right: spacing(0.5),
    top: spacing(0.5),
  },
  '@keyframes card-effect': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-16px)',
    },
    '100%': {
      opacity: 1,
      transform: 'none',
    },
  },
}), { name: 'CardsView' })

function CardsView(props) {
  const classes = useStyles(props)
  const { items } = props
  const history = useHistory()

  return (
    <div className={classes.grid}>
      {items.map((item, i) => (
        <Paper
          key={item._id}
          classes={{ root: classes.paper }}
          onClick={() => history.push(`/currency/${item}`)}
          style={{ animationDelay: `${200 * i}ms` }}
        >
          <div className={classes.language}>
            {item}
          </div>
          <StarIcon className={classes.icon} />
          <div className={classes.itemName}>{currencies[item].symbol_native}</div>
          <div className={classes.date}>
            {currencies[item].name}
          </div>
        </Paper>
      ))}
    </div>
  )
}

export default connect()(CardsView)
