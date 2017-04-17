import React, { Component, PropTypes } from 'react';
import Assignment from 'components/Assignment';
import AssignmentCard from 'components/AssignmentCard';
import { ASSIGNMENT_PAGE, ARCHIVE_PAGE } from 'actions/pages';

class AssignmentsList extends Component {
  static propTypes = {
    assignments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      dateDue: PropTypes.string,
    })).isRequired,
    editModal: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  };

  completeAssignment = (id, assignment, completed = true) => {
    this.props.update(id, {
      ...assignment,
      completed,
    });
  }

  renderThisWeeksAssignments = () => this.props.assignments.filter((a) => {
    return !a.completed;
  }).map(a => (
    <Assignment
      {...a}
      key={a.id}
      editModal={() => this.props.editModal(a.id)}
      complete={(e) => { e.stopPropagation(); this.completeAssignment(a.id, a); }}
    />
  ));

  renderCompletedAssignments = () => this.props.assignments.filter((a) => {
    return a.completed;
  }).map(a => (
    <Assignment
      {...a}
      key={a.id}
      editModal={() => this.props.editModal(a.id)}
      complete={(e) => { e.stopPropagation(); this.completeAssignment(a.id, a, false); }}
    />
  ));

  render() {
    return (
      <div>
        { this.props.page === ASSIGNMENT_PAGE ? (
          <AssignmentCard title="Assignments due this week">
            {this.renderThisWeeksAssignments()}
          </AssignmentCard>
        ) : null }
        { this.props.page === ARCHIVE_PAGE ? (
          <AssignmentCard title="Completed assignments">
            {this.renderCompletedAssignments()}
          </AssignmentCard>
        ) : null }
      </div>
    );
  }
}

export default AssignmentsList;
