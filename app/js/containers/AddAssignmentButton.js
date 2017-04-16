import { connect } from 'react-redux';
import { showAssignmentModal } from 'actions/modal';
import AddAssignmentButton from 'components/AddAssignmentButton';

function mapDispatchToProps(dispatch) {
  return {
    openModal: () => dispatch(showAssignmentModal()),
  };
}

export default connect(null, mapDispatchToProps)(AddAssignmentButton);
