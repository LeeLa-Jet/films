import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/app';
import Home from './components/home/home';
import PageWrapper from './components/page/pageWrapper';

export default () => (
  <Router>
    <App>
      <Route exact={true} component={Home}  path="/"/>
      <Route component={PageWrapper} path="/:id" />
    </App>
  </Router>
);
