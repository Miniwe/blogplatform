import SimpleSchema from 'simpl-schema';
import uniforms from 'uniforms-semantic';
import map from 'lodash/map';
import LongText from '../../../ui/components/uniforms/LongText';

const MainSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    uniforms: () => null,
    optional: true,
    label: 'Id'
  },
  title: {
    type: String,
    label: 'Title'
  },
  description: {
    type: String,
    label: 'Description',
    optional: true,
    uniforms: {
      component: LongText
    },
  },
  isDeleted: {
    type: Boolean,
    label: 'Is Deleted',
    defaultValue: false
  },
  createdAt: {
    type: Date,
    uniforms: () => null,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() }
      }
      return this.unset();
    },
    optional: true
  },
  updatedAt: {
    type: Date,
    uniforms: () => null,
    autoValue() {
      return new Date();
    },
    optional: true
  }
});

export default MainSchema;
