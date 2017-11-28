import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Header, Button } from 'semantic-ui-react';
import ItemContainer from '../../containers/ItemContainer';
import ItemView from '../components/ItemView';

class ViewPage extends Component {
  static = {
    prefix  : PropTypes.string,
    history : PropTypes.object,
  };

  handleRemove = (id) => {
    if (confirm('Remove Item?')) {
      Meteor.call(`${this.props.prefix}.remove`, id, (error, response) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          const confirmation = 'remove success';
          Bert.alert(confirmation, 'success');
          this.props.history.push(`/${this.props.prefix}`);
        }
      });
    }
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={14}>
              <Header as='h3'>View {this.props.prefix}</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button.Group fluid floated='right'>
                <Button basic color='blue' content='Edit' as={Link} to={`/${this.props.prefix}/${id}/edit`} />
                <Button basic color='red' content='Delete' onClick={() => this.handleRemove(id)} />
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ItemContainer component={ItemView} schema='view' itemId={id} {...this.props} />
      </div>
    );
  }
}

export default ViewPage;
