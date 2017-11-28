import React from 'react';
import connectField from 'uniforms/connectField';
import { Grid } from 'semantic-ui-react';

const ViewText = (props) => {
  let { id, name, tag, label, value, colWidth = 13, transform} = props;
  if (typeof(props.transform) === 'function') {
    value = props.transform(value);
  }
  const offsetCol = (16 - colWidth > 0) ? { width: 16 - colWidth } : {};
  return <Grid.Row id={id}>
    <Grid.Column {...offsetCol}>{label && <label htmlFor={id}>{label}: </label>}</Grid.Column>
    <Grid.Column width={colWidth}>{tag ? React.createElement(tag, {children: [value]}) : value}</Grid.Column>
  </Grid.Row>;
};

export default connectField(ViewText);
