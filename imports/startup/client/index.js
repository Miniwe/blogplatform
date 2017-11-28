import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import React from 'react';
import { render } from 'react-dom';
import App from '../../ui/App';
import '../../ui/ui';

Bert.defaults.style = 'growl-bottom-right';

Meteor.startup(() => {
  render(<App />, document.getElementById('app-container'));
});
