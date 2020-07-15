import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "wouter";
import Home from './Home';
import About from './About';

import './scss/base.scss';

const App = () => (
  <div>
    <Route path="/about"><About /></Route>
    <Route path="/"><Home /></Route>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
