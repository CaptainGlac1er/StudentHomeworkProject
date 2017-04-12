import React from 'react';
import AssignmentsList from 'containers/AssignmentsList';
import AssignmentModal from 'containers/AssignmentModal';

const Home = () => (
  <div>
    <AssignmentsList />
    <AssignmentModal action="Update" title="Update Assignment" />
  </div>
);

export default Home;
