import { Mongo } from 'meteor/mongo';
// import { Factory } from 'meteor/dburles:factory';
import extend from 'lodash/extend';
import MainSchema from './schemas/main';
import ListSchema from './schemas/list';
import ViewSchema from './schemas/view';
import Model from './model';

const PAGE_SIZE = 20;

const Contractors = new Mongo.Collection('Contractors', {
  transform(item) {
    return new Model(item);
  }
});

const prepareQuery = (query) => {
  const preparedQuery = {};
  if (query.name) {
    const regex = new RegExp(eval('/' + query.name.split(' ').join('|') + '/i'));
    preparedQuery.$or = [ { name: { $regex: regex } } ];
  }
  if (query.except) {
    if (query.except._id) {
      preparedQuery._id = { $nin: query.except._id };
    }
  }
  return preparedQuery;
};
const prepareParams = (params) => {
  const preparedParams = {};
  if (params.limit) {
    preparedParams.limit = params.limit;
  } else {
    preparedParams.limit = PAGE_SIZE;
  }
  if (Meteor.isServer) {
    if (params.page) {
      preparedParams.skip = (params.page - 1) * PAGE_SIZE;
    }
  }

  if (params.sort) {
    preparedParams.sort = params.sort;
  } else {
    preparedParams.sort = { updatedAt: -1 };
  }
  return preparedParams;
};

extend(Contractors, {
  getSchema(name) {
    let schema;
    switch (name) {
      case 'list':
        schema = ListSchema;
        break;
      case 'view':
        schema = ViewSchema;
        break;
      default:
        schema = MainSchema;
    }
    return schema;
  },

  ids() {
    return this.find({},{fields: {_id: 1}}).fetch().map(item => item._id);
  },
  list(query, params) {
    return this.find(prepareQuery(query), prepareParams(params));
  }
});

Contractors.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Contractors.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Contractors.attachSchema(MainSchema, { selector: { type: 'main' } });
Contractors.attachSchema(ListSchema, { selector: { type: 'list' } });
Contractors.attachSchema(ViewSchema, { selector: { type: 'view' } });

export default Contractors;
