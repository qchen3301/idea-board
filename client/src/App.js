import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import IdeaBoard from './components/IdeaBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={IdeaBoard} />
        </Switch>
      </Router>
      
      <IdeaBoard />
      </div>
    );
  }
}

export default App;
