import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoForm from 'uniforms-semantic/AutoForm';
import AutoFields from 'uniforms-semantic/AutoFields';
import { Link } from 'react-router-dom';
import { Accordion, Form, Input, Icon, Menu, Table, Button, Message, Loader } from 'semantic-ui-react';
import ListWrapper from './ListWrapper';
import Navigation from './Navigation';

class ListItems extends Component {
  static = {
    history : PropTypes.object,
    prefix  : PropTypes.string,
    items   : PropTypes.array,
    schema  : PropTypes.object,
  };

  handleRemove = (id) => {
    if (confirm('Remove Item?')) {
      Meteor.call(`${this.props.prefix}.remove`, id, (error, response) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          const confirmation = 'remove success';
          Bert.alert(confirmation, 'success');
        }
      });
    }
  };

  render() {
    const { items, setPage, schema, refLink, query, params, prefix, setQuery, counts, ...props } = this.props;
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            {schema._firstLevelSchemaKeys.map((item, index) => {
              const field = schema._schema[item];
              let { headerColProps } = field.uniforms || {};
              headerColProps = headerColProps || {};
              return (
                <Table.HeaderCell key={index} {...headerColProps}>
                  {field.label || item}
                </Table.HeaderCell>
              );
            })}
            <Table.HeaderCell collapsing>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {items.length > 0 && !props.loading ? (
          <Table.Body>
            {items.map((model, index) => (
              <ListWrapper key={model._id} model={model} schema={schema} ref={refLink}>
                <AutoFields />
                <Table.Cell collapsing style={{ pointerEvents: 'auto' }}>
                  <Button basic size="small" color='green' content='View' as={Link} to={`/${prefix}/${model._id}`} />
                  <Button basic size="small" color='blue' content='Edit' as={Link} to={`/${prefix}/${model._id}/edit`} />
                  <Button basic size="small" color='red' content='Delete' onClick={() => this.handleRemove(model._id)} />
                </Table.Cell>
              </ListWrapper>
            ))}
          </Table.Body>
        ) : (
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan={schema._firstLevelSchemaKeys.length + 1}>
                <Loader active={props.loading} inline='centered'/>
                {props.loading ? (null) : (<Message warning>No items yet.</Message>)}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={schema._firstLevelSchemaKeys.length + 1}>
              <Navigation params={params} counts={counts} setPage={setPage} />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default ListItems;
