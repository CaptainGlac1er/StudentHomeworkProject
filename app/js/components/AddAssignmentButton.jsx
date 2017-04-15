import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'fixed',
  bottom: '15px',
  right: '15px',
};

const AddAssignmentButton = ({ openModal }) => (
  <FloatingActionButton style={style} onTouchTap={openModal}>
    <ContentAdd />
  </FloatingActionButton>
);

AddAssignmentButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default AddAssignmentButton;
