import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Topics from './pages/Topics/topics';

import {BrowserRouter as Router, Route, Switch, Redirect,
  //Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
      <Index />
      <Redirect to="/home" />
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
   </Switch>
    </div>
  </Router>,document.querySelector('#root'));
