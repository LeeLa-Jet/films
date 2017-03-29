import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes';

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById("app"));
