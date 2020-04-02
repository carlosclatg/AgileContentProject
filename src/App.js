import React from 'react';
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Home from './components/Home';
import './App.sass'


function App() {
    return (
      <div className="App">
        <Home/>     
      </div> 
  );
}
export default App;
