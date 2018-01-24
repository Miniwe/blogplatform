import SimpleSchema from 'simpl-schema';
import uniforms from 'uniforms-semantic';
import ViewText from '../../../ui/components/uniforms/ViewText';

const ViewSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'Id',
    uniforms: () => null,
  },
  cname: {
    type: String,
    label: 'Name',
    uniforms: ViewText
  },
  phone: {
    type: String,
    label: 'Phone',
    uniforms: ViewText
  },
  email: {
    type: String,
    label: 'Email',
    uniforms: ViewText
  },
  country: {
    type: String,
    label: 'Counry',
    uniforms: ViewText
  },
  address: {
    type: String,
    label: 'Address',
    uniforms: ViewText
  },
  isDeleted: {
    type: Boolean,
    label: 'Is Deleted',
    uniforms: () => null,
  }
});

export default ViewSchema;
