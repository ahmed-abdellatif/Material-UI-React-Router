import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import Home from './pages/Home/home';
import Editor from './pages/Editor/editor';
import Topics from './pages/Topics/topics';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import {BrowserRouter as Router, Route, Switch
  //Link
} from 'react-router-dom'



ReactDOM.render(
  <Router>
    <div>
      <App />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/editor" component={Editor}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
   </Switch>
    </div>
  </Router>,document.querySelector('#root'));
