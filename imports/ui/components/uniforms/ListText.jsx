import React from 'react';
import connectField from 'uniforms/connectField';

const ListText = (props) => {
  let { id, name, label, value, transform} = props;
  if (typeof(props.transform) === 'function') {
    value = props.transform(value);
  }

  return (
    <div id={id}>
      {label && <label htmlFor={id}>{label}: </label>}
      {value}
    </div>
  );
};

export default connectField(ListText);
