import { faker } from 'meteor/practicalmeteor:faker';
import times from 'lodash/times';
import Contractors from './collection';

const makeFakeData = () => {
  const item = {
    cname: (Math.random() < 0.5) ? faker.company.companyName() : faker.name.findName(),
    phone: faker.phone.phoneNumberFormat(),
    email: faker.internet.email(),
    country: faker.address.county(),
    address: faker.address.streetAddress('###'),
    isDeleted: (Math.random() < 0.15)
  };
  return item;
};

const fixtures = (count = 40) => {
  if (count === 0) {
    Contractors.remove({});
  } else if (!Contractors.find().count()) {
    times(count, () => {
      Contractors.insert(makeFakeData(), { selector: { type: 'main' } });
    });
  }
};

export default fixtures;
