import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';

import postsFixtures from '../../api/posts/fixtures';

Meteor.startup(() => {
  postsFixtures(61);
});


const resetTable = new ValidatedMethod({
  name: 'resetTable',
  validate({ table, count }) {
    check(table, String);
    check(count, Number);
  },
  run({ table, count }) {
    switch (table) {
      case 'posts':
        postsFixtures(count);
        break;
      default:
        throw new Meteor.Error('resetTable', 'Not defined table');
    }
  }
});

rateLimit({
  methods: [
    resetTable,
  ],
  limit: 5,
  timeRange: 1000
});
