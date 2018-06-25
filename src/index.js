import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Topics from './pages/Topics/topics';
import Register from './pages/Register/register';
import Login from './pages/Login/login';




import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>

    <div>
    <Home />
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>

    </div>
  </Router>,document.querySelector('#root'));
