import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import Home from './pages/Home/home';
import Editor from './pages/Editor/editor';
import Topics from './pages/Topics/topics';
import {BrowserRouter as Router, Route, Switch
  //Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
      <Index />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/editor" component={Editor}/>
      <Route path="/topics" component={Topics}/>
   </Switch>
    </div>
  </Router>,document.querySelector('#root'));
