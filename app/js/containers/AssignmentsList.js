import { connect } from 'react-redux';
import AssignmentsList from 'components/AssignmentsList';
import { createAssignment, updateAssignment, destroyAssignment } from 'actions/assignments';

function mapStateToProps(store) {
  return {
    assignments: store.assignments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: assignment => dispatch(createAssignment(assignment)),
    update: (id, assignment) => dispatch(updateAssignment(id, assignment)),
    destory: id => dispatch(destroyAssignment(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentsList);
