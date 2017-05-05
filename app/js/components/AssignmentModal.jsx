import React, { PropTypes, Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import moment from 'moment';

class AssignmentModal extends Component {
  static propTypes = {
    assignment: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      dateDue: PropTypes.string,
    }),
    close: PropTypes.func.isRequired,
    createAssignment: PropTypes.func.isRequired,
    updateAssignment: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    assignment: {
      id: 0,
      title: '',
      description: '',
      dateDue: '',
    },
  };

  handleChange = (field, e, value) => {
    this.assignment = {
      ...this.assignment,
      [field]: e ? e.target.value : value,
    };
  }

  handleSubmit = () => {
    const {
      close,
      assignment,
      updateAssignment,
      createAssignment,
    } = this.props;

    const dueDate = moment(this.assignment.dueDate);
    const dueTime = moment(this.assignment.dueTime);

    dueDate.set('hours', dueTime.hours());
    dueDate.set('minutes', dueTime.minutes());

    const newAssignment = {
      title: this.assignment.title,
      description: this.assignment.description,
      dateDue: dueDate.toISOString(),
    };

    close();

    if (assignment.id) {
      return updateAssignment(assignment.id, newAssignment);
    }
    return createAssignment(newAssignment);
  }

  render() {
    const { close, opened } = this.props;
    const assignment = this.props.assignment || {};
    const createOrUpdate = assignment.id ? 'Update' : 'Create';
    const date = assignment.id ? moment(assignment.dateDue).toDate() : new Date();

    this.assignment = {
      title: assignment.title,
      description: assignment.description,
      dueDate: assignment.dateDue,
      dueTime: assignment.dateDue,
    };

    const actions = [
      <FlatButton label="Cancel" keyboardFocused onTouchTap={close} />,
      <FlatButton primary label={createOrUpdate} keyboardFocused onTouchTap={this.handleSubmit} />,
    ];

    return (
      <Dialog
        modal
        title={`${createOrUpdate} Assignment`}
        open={opened}
        actions={actions}
      >
        <form>
          <label htmlFor="name">Name</label><br />
          <TextField onChange={e => this.handleChange('title', e)} defaultValue={assignment.title || ''} id="name" /><br />
          <label htmlFor="description">Description</label><br />
          <TextField onChange={e => this.handleChange('description', e)} defaultValue={assignment.description || ''} id="description" /><br />
          <label htmlFor="dueDate">Date Due</label><br />
          <DatePicker onChange={(a, b) => this.handleChange('dueDate', a, b)} defaultDate={date} autoOk id="dueDate" />
          <label htmlFor="dueTime">Time Due</label><br />
          <TimePicker onChange={(a, b) => this.handleChange('dueTime', a, b)} defaultTime={date} autoOk id="dueTime" />
        </form>
      </Dialog>
    );
  }
}

export default AssignmentModal;
