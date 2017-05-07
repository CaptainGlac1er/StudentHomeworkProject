import { connect } from 'react-redux';
import AssignmentModal from 'components/AssignmentModal';
import { hideModal, ASSIGNMENT_MODAL } from 'actions/modal';
import { createAssignment, updateAssignment, destroyAssignment } from 'actions/assignments';
import { updateMessage } from 'actions/snackbarMessage';

function mapStateToProps(store) {
  return {
    assignment: store.assignments.find(a => store.modal.id === a.id),
    opened: store.modal.modalType === ASSIGNMENT_MODAL,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(hideModal()),
    createAssignment: assignment => dispatch(createAssignment(assignment)),
    updateAssignment: (id, assignment) => dispatch(updateAssignment(id, assignment)),
    delete: id => dispatch(destroyAssignment(id)),
    snackbarMessageEdit: message => dispatch(updateMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentModal);
