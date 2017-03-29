import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import Home from './components/home/home';

export default () => (
  <App>
    <Route component={Home} path="/" />
  </App>
);
