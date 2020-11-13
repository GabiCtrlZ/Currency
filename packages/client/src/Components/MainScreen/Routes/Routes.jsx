import React from 'react'
import { SemipolarLoading } from 'react-loadingg'
import { get } from 'lodash'
import {
  List,
  ListItem,
  makeStyles,
} from '@material-ui/core'

import { connect } from 'react-redux'
import { setSelectedCycle } from '../../../store/actions/selectedCycle'

const useStyles = makeStyles(({ spacing, palette }) => ({
  title: {
    alignItems: 'center',
    justifyItems: 'center',
    display: 'inline-grid',
    margin: spacing(),
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  listItem: {
    borderTop: `1px solid ${palette.action.disabled}`,
    display: 'flex',
    flexDirection: 'column',
    '&[aria-selected="true"]': {
      background: palette.grey[100],
      borderLeft: `4px solid ${palette.primary.main}`,
    },
  },
  listIndex: {
    marginRight: spacing(5),
    display: 'inline-grid',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyItems: 'center',
    background: palette.grey[400],
    color: '#fff',
    borderRadius: '50%',
    fontSize: 14,
    '&[aria-selected="true"]': {
      background: palette.primary.main,
    },
  },
  listText: {
    flex: '1 1 auto',
    fontWeight: 'bold',
    marginTop: spacing(),
    marginBottom: spacing(),
  },
  coinText: {
    fontWeight: 'bold',
    fontSize: 17,
    margin: spacing(),
    marginLeft: 0,
  },
  profitPerStep: {
    alignSelf: 'start',
    marginLeft: spacing(8),
    marginBottom: spacing(),
  },
  routeLength: {
    alignSelf: 'start',
    marginLeft: spacing(8),
    color: palette.grey[600],
  },
  tagsContainer: {
    '& span': {
      fontSize: 12,
      padding: 5,
      borderRadius: 3,
      margin: spacing(0.5),
      background: palette.primary.main,
      color: 'white',
      maxWidth: '45%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
}), { name: 'Routes' })

function Routes(props) {
  const classes = useStyles()
  const {
    cycles,
    isLoadingRoutes,
    selectedCycle,
    dispatch,
  } = props

  return (
    <>
      {!isLoadingRoutes && !!cycles.length && (
        <>
          <div className={classes.title}>
            Possible routes
          </div>
          <List aria-label="routes list">
            {cycles.slice(0, 5).map(({ path, profit }, i) => (
              <ListItem
                key={profit / path.length}
                button
                onClick={() => dispatch(setSelectedCycle(i))}
                className={classes.listItem}
                aria-selected={selectedCycle === i}
              >
                <div className={classes.container}>
                  <div
                    className={classes.listIndex}
                    aria-selected={selectedCycle === i}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={classes.coinText}
                  >
                    {`${get(path, [0, 'parent'], '')}`}
                  </div>
                  <div
                    className={classes.listText}
                  >
                    {`Profit: ${parseFloat((profit < 0.1 ? profit * 1000 : profit).toFixed(3))}%`}
                  </div>
                  {(i === 0) && (
                    <div className={classes.tagsContainer}>
                      <span>
                        OPTIMAL
                      </span>
                    </div>
                  )}
                </div>
                <div className={classes.profitPerStep}>
                  {`Average profit per step: ${parseFloat(((profit < 0.1 ? profit * 1000 : profit) / path.length)
                    .toFixed(3))}`}
                </div>
                <div className={classes.routeLength}>
                  {`Route length: ${path.length}`}
                </div>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {isLoadingRoutes && (
        <>
          <SemipolarLoading
            color="#44a5e5"
            size="large"
          />
          <div
            className={classes.title}
          >
            Searching for routes
          </div>
        </>
      )}
      {!isLoadingRoutes && !cycles.length && (
        <div className={classes.title}>
          Currenty there is no routes
        </div>
      )}
    </>
  )
}

const mapStateToProps = ({ app: { cycles, isLoadingRoutes }, selectedCycle }) => ({
  cycles,
  isLoadingRoutes,
  selectedCycle,
})

export default connect(mapStateToProps)(Routes)
