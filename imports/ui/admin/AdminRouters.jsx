import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import ListPage from './pages/ListPage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

const AdminRouters = (appProps) => {
  const url = appProps.match.path;
  const prefix = 'posts';
  return (
    <Segment basic>
      <Switch>
        <Route exact name={`${prefix}`}
          path={`${url}`}
          render={props => <ListPage prefix={prefix} {...props} />}
          {...appProps}
        />
        <Route exact name={`${prefix}.new`}
          path={`${url}/new`}
          render={props => <NewPage prefix={prefix} {...props} />}
          {...appProps}
        />
        <Route name={`${prefix}.edit`}
          path={`${url}/:id/edit`}
          render={props => <EditPage prefix={prefix} {...props} />}
          {...appProps}
        />
        <Route name={`${prefix}.view`}
          path={`${url}/:id`}
          render={props => <ViewPage prefix={prefix} {...props} />}
          {...appProps}
        />
      </Switch>
    </Segment>
  )
};


export default AdminRouters;
