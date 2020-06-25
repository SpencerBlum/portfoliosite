import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import  Home from "./Routes/Home.js"



function App() {
  return (
 
    <div className="">
      <Router basename= {process.env.PUBLIC_URL}  >
      <div>
      <Route  exact path="/"  render={(routerProps) => <Home routerProps={routerProps}  /> } />
      </div>
    </Router>
    </div>
  );
}

export default App;
