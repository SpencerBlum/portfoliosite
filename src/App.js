import React from 'react';
import logo from './logo.svg';
import './App.css';

import {  Switch, Route, Redirect } from 'react-router-dom';
import  Home from "./Routes/Home.js"



function App() {
  return (
      <Switch>
        <Route  exact path="/Home" component={Home} />
        <Route  exact path="*"  render={() => <Redirect to ="/Home" /> } />
     </Switch>
  );
}

export default App;
