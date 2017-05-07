import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'absolute',
  bottom: '15px',
  right: '15px',
  zIndex: '100',
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
