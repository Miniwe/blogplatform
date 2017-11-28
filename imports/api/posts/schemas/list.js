import SimpleSchema from 'simpl-schema';
import uniforms from 'uniforms-semantic';
import ListText from '../../../ui/components/uniforms/ListText';
import ListBoolean from '../../../ui/components/uniforms/ListBoolean';

const ListSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    uniforms: {
      component: ListText,
      filter: true
    }
  },
  isDeleted: {
    type: Boolean,
    label: 'Is Deleted',
    uniforms: {
      label: false,
      component: ListBoolean,
      state: true
    }
  }
});

export default ListSchema;
