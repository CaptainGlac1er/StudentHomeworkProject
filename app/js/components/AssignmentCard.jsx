import React, { PropTypes } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Table, TableBody } from 'material-ui/Table';
import theme from 'theme';

const AssignmentCard = ({
  title,
  children,
}) => (
  <Card>
    <CardTitle title={title} style={{ backgroundColor: theme.primary3Color }} />
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        {children}
      </TableBody>
    </Table>
  </Card>
);

AssignmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AssignmentCard;
