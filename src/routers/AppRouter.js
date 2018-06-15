import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route
          path='/'
          component={LoginPage}
          exact={true}
        />
        <PrivateRoute
          path='/dashboard'
          component={ExpenseDashboardPage}
        />
        <PrivateRoute
          path='/create'
          component={AddExpensePage}
        />
        <PrivateRoute
          path='/edit/:id'
          component={EditExpensePage}
        />
        <Route
          path='/help'
          component={HelpPage}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
