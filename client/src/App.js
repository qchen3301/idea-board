import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import IdeaBoard from './components/IdeaBoard'

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/users/:userId' component={IdeaBoard} />
        </Switch>
      </Router>
      </div>
    )
  }
}