// import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Contractors from './collection';
import rateLimit from '../../modules/rate-limit.js';
import MainSchema from './schemas/main';

export const upsertContractor = new ValidatedMethod({
  name: 'contractors.upsert',
  validate: MainSchema.validator({ clean: true }),
  run(data) {
    return Contractors.upsert({
      _id: data._id
    }, { $set: data }, { selector: { type: 'main' } });
  }
});

export const removeContractor = new ValidatedMethod({
  name: 'contractors.remove',
  validate(id) {
    check(id, String);
  },
  run(id) {
    return Contractors.remove(id);
  }
});

rateLimit({
  methods: [
    upsertContractor,
    removeContractor
  ],
  limit: 5,
  timeRange: 1000
});
