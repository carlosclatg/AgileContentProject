'use strict'
import React, { useState, useEffect } from 'react';
import { Route, HashRouter as Router, Redirect, withRouter, Switch  } from "react-router-dom";
import Home from './components/Home'

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
