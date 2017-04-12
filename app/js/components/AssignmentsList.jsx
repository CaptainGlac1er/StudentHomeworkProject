import React, { Component, PropTypes } from 'react';
import Assignment from 'components/Assignment';
import { Card, CardTitle } from 'material-ui/Card';
import { Table, TableBody } from 'material-ui/Table';
import theme from 'theme';

class AssignmentsList extends Component {
  static propTypes = {
    assignments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      dateDue: PropTypes.string,
    })).isRequired,
    update: PropTypes.func.isRequired,
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
      complete={() => this.completeAssignment(a.id, a)}
    />
  ));

  renderCompletedAssignments = () => this.props.assignments.filter((a) => {
    return a.completed;
  }).map(a => (
    <Assignment
      {...a}
      key={a.id}
      complete={() => this.completeAssignment(a.id, a, false)}
    />
  ));

  render() {
    return (
      <div>
        <Card>
          <CardTitle
            title="Assignments due this week"
            style={{ backgroundColor: theme.primary3Color }}
          />
          <Table
            selectable={false}
          >
            <TableBody
              displayRowCheckbox={false}
            >
              {this.renderThisWeeksAssignments()}
            </TableBody>
          </Table>
        </Card>
        <Card>
          <CardTitle
            title="Completed assignments"
            style={{ backgroundColor: theme.primary3Color }}
          />
          <Table
            selectable={false}
          >
            <TableBody
              displayRowCheckbox={false}
            >
              {this.renderCompletedAssignments()}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default AssignmentsList;
