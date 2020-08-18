import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'

function App() {
  return (
      <Router>
          {this.props.loggedin ? <NavBar loggedin={this.props.loggedin} /> : <Home />}
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Home loggedin={this.props.loggedin} />}/>

      </Switch>
    </div>
      </Router>
  );
}

export default App;
