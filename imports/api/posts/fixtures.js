import { faker } from 'meteor/practicalmeteor:faker';
import times from 'lodash/times';
import Posts from './collection';

const makeFakeData = () => {
  const item = {
    title: faker.commerce.productName(),
    description: faker.lorem.paragraphs(3),
  };
  return item;
};

const fixtures = (count = 40) => {
  if (count === 0) {
    Posts.remove({});
  } else if (!Posts.find().count()) {
    times(count, () => {
      Posts.insert(makeFakeData(), { selector: { type: 'main' } });
    });
  }
};

export default fixtures;
