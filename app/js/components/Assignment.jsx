import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import moment from 'moment';
import 'css/app.css';

const Assignment = ({
  title,
  dateDue,
  complete,
  editModal,
  completed,
  description,
}) => (
  <TableRow key={title} onTouchTap={editModal}>
    <TableRowColumn><strong>{title}</strong></TableRowColumn>
    <TableRowColumn className="hide">{description}</TableRowColumn>
    <TableRowColumn className="hide"><Chip>{moment(dateDue).format('DD/MM - hh:mm a')}</Chip></TableRowColumn>
    <TableRowColumn><FlatButton primary onTouchTap={complete} label={!completed ? 'Complete' : 'Unarchive'} /></TableRowColumn>
  </TableRow>
);

Assignment.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.func.isRequired,
  dateDue: PropTypes.string.isRequired,
  editModal: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Assignment;
