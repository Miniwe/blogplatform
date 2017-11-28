import SimpleSchema from 'simpl-schema';
import uniforms from 'uniforms-semantic';
import ViewText from '../../../ui/components/uniforms/ViewText';

const ViewSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'Id',
    uniforms: () => null,
  },
  title: {
    type: String,
    label: 'Title',
    uniforms: ViewText
  },
  description: {
    type: String,
    label: 'Description',
    uniforms: ViewText
  },
  isDeleted: {
    type: Boolean,
    label: 'Is Deleted',
    uniforms: () => null,
  }
});

export default ViewSchema;
