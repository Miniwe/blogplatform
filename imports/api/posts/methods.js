// import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Posts from './collection';
import rateLimit from '../../modules/rate-limit.js';
import MainSchema from './schemas/main';

export const upsertPost = new ValidatedMethod({
  name: 'posts.upsert',
  validate: MainSchema.validator({ clean: true }),
  run(post) {
    return Posts.upsert({
      _id: post._id
    }, { $set: post }, { selector: { type: 'main' } });
  }
});

export const removePost = new ValidatedMethod({
  name: 'posts.remove',
  validate(id) {
    check(id, String);
  },
  run(id) {
    return Posts.remove(id);
  }
});

rateLimit({
  methods: [
    upsertPost,
    removePost
  ],
  limit: 5,
  timeRange: 1000
});
