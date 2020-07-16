import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "wouter";
import Home from './Home';
import About from './About';
import Categories from './Categories';
import Checkout from './Checkout';
import Complaints from './Complaints';
import Payment from './Payment';
import Rules from './Rules';

import './scss/base.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => (
  <div>
    <Route path="/complaints"><Complaints /></Route>
    <Route path="/payment"><Payment /></Route>
    <Route path="/rules"><Rules /></Route>
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
