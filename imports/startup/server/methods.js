import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';

export const tmpMethod = new ValidatedMethod({
  name: 'tmp',
  validate() {},
  run() {
    throw new Meteor.Error('tmp', 'Test Call');
  }
});


rateLimit({
  methods: [
    tmpMethod
  ],
  limit: 5,
  timeRange: 1000,
});
