import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoForm from 'uniforms-semantic/AutoForm';

class FormItem extends Component {
  static = {
    history : PropTypes.object,
    prefix  : PropTypes.string,
    model   : PropTypes.object,
    schema  : PropTypes.object,
  };

  handleSave = (error, response) => {
    const {returnPath, history, model, prefix} = this.props;
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      const confirmation = response.insertedId ? 'success insert' : 'success update';
      Bert.alert(confirmation, 'success');
      // this.formItem.reset(); /** @todo possible need to remove  for fix error on new Directory save */
      if (returnPath) {
        history.push(returnPath);
      }
      else {
        history.push(`/${prefix}/${response.insertedId || model._id}`);
      }
    }
  };

  handleSubmit = (doc) => {
    Meteor.call(`${this.props.prefix}.upsert`, doc, this.handleSave);
  };

  render() {
    const {
      model,
      schema,
      modelTransform,
      submitField,
      customSubmit,
      ...props
    } = this.props;

    let customProps = {
      model,
      schema,
      submitField,
      modelTransform,
      onSubmit: customSubmit ? customSubmit : this.handleSubmit
    };

    if (submitField) {
      customProps.submitField = submitField;
    }
    return (
      <AutoForm
        ref={form => this.formItem = form}
        {...customProps}
      />
    );
  }
}

export default FormItem;
