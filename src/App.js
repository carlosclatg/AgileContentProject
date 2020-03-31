import React from 'react';
import { HashRouter as Router, Redirect, Route, withRouter } from "react-router-dom";
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" render={() => <Redirect to="/home" /> }/>
          <Route path="/home" component={ Home }/>
      </Router>
    </div> 
  );
}
export default withRouter(App);
