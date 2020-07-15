import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "wouter";
import Home from './Home';

import './scss/base.scss';

const App = () => (
  <div>
    <Route path="/"><Home /></Route>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
