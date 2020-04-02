import React from 'react';
import { HashRouter as Router, Redirect, Route, withRouter } from "react-router-dom";
import Home from './components/Home';
import './App.sass'

function App() {
  return (
    <Router>
      <div className="App">
            <Route exact path="/" render={() => <Redirect to="/home" /> }/>
            <Route path="/home" component={ Home }/>      
      </div> 
    </Router>
  );
}
export default App;
