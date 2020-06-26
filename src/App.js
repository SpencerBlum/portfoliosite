import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import  Home from "./Routes/Home.js"



function App() {
  return (
 
    <div className="">
      <Router >
      <div>
      <Route  exact path="/"  render={() => <Home/> } />
      <Route  exact path="*"  render={() => <Redirect to ="/" /> } />
      </div>
    </Router>
    </div>
  );
}

export default App;
