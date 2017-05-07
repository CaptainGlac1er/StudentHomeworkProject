import { connect } from 'react-redux';
import AssignmentsList from 'components/AssignmentsList';
import { updateAssignment } from 'actions/assignments';
import { showAssignmentModal } from 'actions/modal';
import { updateMessage } from 'actions/snackbarMessage';

function mapStateToProps(store) {
  return {
    assignments: store.assignments.filter((a) => {
      return a.title.toLowerCase().indexOf(store.filter.toLowerCase()) !== -1 ||
        a.description.toLowerCase().indexOf(store.filter.toLowerCase()) !== -1;
    }),
    page: store.pages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: (id, assignment) => dispatch(updateAssignment(id, assignment)),
    editModal: id => dispatch(showAssignmentModal(id)),
    snackbarMessageEdit: message => dispatch(updateMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentsList);
