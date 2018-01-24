import React, { Component } from 'react';
import PropTypes from 'prop-types';
import extend from 'lodash/extend';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import ListItems from '../components/ListItems';
import { Link } from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';

class ListPage extends Component {
  static = {
    prefix: PropTypes.string,
    history: PropTypes.object,
  };

  state = {
    query: {},
    params: {},
  };

  setPage = (number) => {
    this.setState({
      params: {
        ...this.state.params,
        page: number,
      },
    });
  };

  setQuery = (name, value) => {
    // this.state.query[name] = value;
    this.setState({
      query: {
        ...this.state.query,
        name: value,
      },
    });
  };

  render() {
    const { query, params } = this.state;
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={14}>
              <Header as='h3'>
                List Items <strong style={{ 'text-transform': 'uppercase' }}>{this.props.prefix}</strong>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button fluid color='green' name='newItem' as={Link} to={`/${this.props.prefix}/new`}>
                New Item
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ListContainer
          schema='list'
          groupContainer={ListItems}
          setQuery={this.setQuery}
          setPage={this.setPage}
          query={query}
          params={params}
          {...this.props}
        />
      </div>
    );
  }
}

export default ListPage;
