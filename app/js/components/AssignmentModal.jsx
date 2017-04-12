import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';

const AssignmentModal = ({
  close,
  create,
  update,
  title,
  createAssignment,
  updateAssignment,
  opened,
}) => {
  const handleSubmit = (assignment) => {
    if (update) {
      return updateAssignment(assignment.id, assignment);
    }
    return createAssignment(assignment);
  };

  const actions = [
    <FlatButton label="Cancel" keyboardFocused onTouchTap={close} />,
    <FlatButton primary label={create ? 'Create' : 'Update'} keyboardFocused onTouchTap={handleSubmit} />,
  ];

  return (
    <Dialog
      modal
      title={title}
      open={opened}
      actions={actions}
    >
      <form>
        <label htmlFor="name">Name</label><br />
        <TextField id="name" name="name" hintText="Assignment Name" /><br />
        <label htmlFor="description">Description</label><br />
        <TextField id="description" name="description" hintText="Description" /><br />
        <label htmlFor="dueDate">Date Due</label><br />
        <DatePicker autoOk id="dueDate" name="dueDate" hintText="Date Due" />
        <label htmlFor="dueTime">Time Due</label><br />
        <TimePicker autoOk id="dueTime" name="dueTime" hintText="Time Due" />
      </form>
    </Dialog>
  );
};

AssignmentModal.propTypes = {
  create: PropTypes.bool,
  update: PropTypes.bool,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  createAssignment: PropTypes.func.isRequired,
  updateAssignment: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};

AssignmentModal.defaultProps = {
  create: false,
  update: false,
};

export default AssignmentModal;
