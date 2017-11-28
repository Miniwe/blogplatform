import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { check } from 'meteor/check';
import Posts from '../collection';

Meteor.publish('posts.counts', function postsCounts(query = {}) {
  check(query, Object);
  Counts.publish(this, 'posts.counts', Posts.list(query, { limit: 1000 }));
});


Meteor.publish('posts.list', (query = {}, params = {}) => {
  check(query, Object);
  check(params, Object);
  return [
    Posts.list(query, params),
  ];
});

Meteor.publish('posts.single', (id) => {
  check(id, Match.Maybe(String, null));
  return [
    Posts.find(id)
  ];
});
