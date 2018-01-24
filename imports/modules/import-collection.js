import PostsCollection from '../api/posts/collection';
import ContractorsCollection from '../api/contractors/collection';

const assignCollection = function(result) {
  this.setState({ collection: result.default });
};

const importCollection = function(prefix) {
  switch (prefix) {
    case 'posts':
      import('../api/posts/collection').then(assignCollection.bind(this));
      break;
    case 'contractors':
      import('../api/contractors/collection').then(assignCollection.bind(this));
      break;
  }
};

const getCollection = (prefix) => {
let collection;
switch (prefix) {
  case 'posts':
    collection = PostsCollection;
    break;
  case 'contractors':
    collection = ContractorsCollection;
    break;
}
return collection;
};

export { getCollection, importCollection };
export default importCollection;
