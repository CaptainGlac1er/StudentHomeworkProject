import React from 'react';
import AssignmentsList from 'containers/AssignmentsList';
import AssignmentModal from 'containers/AssignmentModal';
import AddAssignmentButton from 'containers/AddAssignmentButton';

const Home = () => (
  <div>
    <AssignmentsList />
    <AssignmentModal />
    <AddAssignmentButton />
  </div>
);

export default Home;
