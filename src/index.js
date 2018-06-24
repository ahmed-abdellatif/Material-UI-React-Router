import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Topics from './pages/Topics/topics';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>

    <div>
    <Home />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>,document.querySelector('#root'));
