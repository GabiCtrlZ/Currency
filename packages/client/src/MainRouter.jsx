import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CurrencyScreen from './Components/CurrencyScreen/CurrencyScreen'
import MainScreen from './Components/MainScreen/MainScreen'

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <MainScreen />
      </Route>
      <Route exact path="/currency/:id">
        <CurrencyScreen />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}

export default MainRouter
