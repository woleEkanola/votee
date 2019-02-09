import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import { Route, Switch } from "react-router-dom";


class App extends Component {

  
  

  render() {
   
   
    return (
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path= "/sign-in" component= {SignIn} />
      <Route path= "/sign-up" component= {SignUp} />


    </Switch>
    );
  }
}

export default App;
