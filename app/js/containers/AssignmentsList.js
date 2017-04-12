import { connect } from 'react-redux';
import AssignmentsList from 'components/AssignmentsList';
import { updateAssignment } from 'actions/assignments';
import { showAssignmentModal } from 'actions/modal';

function mapStateToProps(store) {
  return {
    assignments: store.assignments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: (id, assignment) => dispatch(updateAssignment(id, assignment)),
    editModal: id => dispatch(showAssignmentModal(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentsList);
