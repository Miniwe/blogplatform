import React from 'react';
import QuickForm from 'uniforms-semantic/QuickForm';
import { Table } from 'semantic-ui-react';

export default class ListWrapper extends QuickForm {
  render() {
    const nativeFormProps = this.getNativeFormProps();
    const AutoField = this.props.autoField || this.getAutoField();
    return (
      <Table.Row {...nativeFormProps}>
        {this.getChildContextSchema().getSubfields().map((key, index) => (
          <Table.Cell key={index}>
            <AutoField name={key} ref={`af_${key}`} label={false} parent={this} />
          </Table.Cell>
        ))}
        {this.props.children.length > 1 ? this.props.children[1] : ''}
      </Table.Row>
    );
  }
}
