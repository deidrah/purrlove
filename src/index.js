import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "wouter";
import Home from './Home';
import About from './About';
import Categories from './Categories';
import Checkout from './Checkout';

import './scss/base.scss';

const App = () => (
  <div>
    <Route path="/checkout"><Checkout /></Route>
    <Route path="/categories"><Categories /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/"><Home /></Route>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
