import React from 'react';
import AutoField from 'uniforms-semantic/AutoField';
import AutoForm from 'uniforms-semantic/AutoForm';

export default class ViewWrapper extends AutoForm {
  render() {
    const { parent, ...nativeFormProps } = this.getNativeFormProps();
    return (
      <div {...nativeFormProps}>
        {this.getChildContextSchema().getSubfields().map((key, index) => {
          return <AutoField key={index} name={key} parent={parent} />;
        })}
      </div>
    );
  }
}
