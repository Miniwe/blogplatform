import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './pages/ListPage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

const AdminRouters = (appProps) => {
  const url = appProps.match.path;
  const prefix = url.split('/').pop();
  return (
    <Switch>
      <Route
        exact
        name={`${prefix}`}
        path={`${url}`}
        render={(props) => <ListPage prefix={prefix} {...props} />}
        {...appProps}
      />
      <Route
        exact
        name={`${prefix}.new`}
        path={`${url}/new`}
        render={(props) => <NewPage prefix={prefix} {...props} />}
        {...appProps}
      />
      <Route
        name={`${prefix}.edit`}
        path={`${url}/:id/edit`}
        render={(props) => <EditPage prefix={prefix} {...props} />}
        {...appProps}
      />
      <Route
        name={`${prefix}.view`}
        path={`${url}/:id`}
        render={(props) => <ViewPage prefix={prefix} {...props} />}
        {...appProps}
      />
    </Switch>
  );
};

export default AdminRouters;
