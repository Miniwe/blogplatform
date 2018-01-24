import { ValidatedMethod } from 'meteor/mdg:validated-method';
import rateLimit from '../../modules/rate-limit.js';

import postsFixtures from '../../api/posts/fixtures';
import contractorsFixtures from '../../api/contractors/fixtures';

Meteor.startup(() => {
  postsFixtures(61);
  contractorsFixtures(61);
});


const resetTable = new ValidatedMethod({
  name: 'resetTable',
  validate({ table, count }) {
    check(table, String);
    check(count, Number);
  },
  run({ table, count }) {
    switch (table) {
      case 'contractors':
        contractorsFixtures(count);
        break;
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
