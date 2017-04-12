import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Chip from 'material-ui/Chip';
import moment from 'moment';

const Assignment = ({
  title,
  dateDue,
  complete,
  completed,
  description,
}) => (
  <TableRow key={title}>
    <TableRowColumn><strong>{title}</strong></TableRowColumn>
    <TableRowColumn>{description}</TableRowColumn>
    <TableRowColumn>
      <Chip style={{ float: 'left' }}>{moment(dateDue).format('DD/MM - hh:MM a')}</Chip>
      <FlatButton primary onTouchTap={complete} label={!completed ? 'Complete' : 'Unarchive'} style={{ float: 'right' }} />
    </TableRowColumn>
  </TableRow>
);

Assignment.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.func.isRequired,
  dateDue: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Assignment;
