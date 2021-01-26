import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

import SignIn from '../pages/SignIn';
import Main from '../pages/Main';
import FormBook from '../pages/FormBook';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} isPrivate={false} />
    <Route path="/main" exact component={Main} isPrivate />
    <Route path="/register" exact component={FormBook} isPrivate />
    <Route path="/update/:id" exact component={FormBook} isPrivate />
  </Switch>
);

export default Routes;
