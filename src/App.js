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
      <Route  exact path="/Home"   omponent={Home} />
      <Route  exact path="*"  render={() => <Redirect to ="/Home" /> } />
      </div>
    </Router>
    </div>
  );
}

export default App;
