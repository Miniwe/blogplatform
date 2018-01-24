import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { check } from 'meteor/check';
import Contractors from '../collection';

Meteor.publish('contractors.counts', function contractorsCounts(query = {}) {
  check(query, Object);
  Counts.publish(this, 'contractors.counts', Contractors.list(query, { limit: 1000 }));
});


Meteor.publish('contractors.list', (query = {}, params = {}) => {
  check(query, Object);
  check(params, Object);
  return [
    Contractors.list(query, params),
  ];
});

Meteor.publish('contractors.single', (id) => {
  check(id, Match.Maybe(String, null));
  return [
    Contractors.find(id)
  ];
});
