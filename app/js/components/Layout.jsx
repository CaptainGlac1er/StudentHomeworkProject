import React from 'react';
import TopBar from './TopBar';
import SubBar from './SubBar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleHamburger(open) {
    if (!open) {
      this.handleClose();
    }
  }
  handleToggle = () => this.setState({ open: !this.state.openi });
  handleClose = () => this.setState({ open: false });
  render() {
    return (
      <div>
        <TopBar />
        <SubBar />
        <div>navbar</div>
        {this.props.children}
      </div>);
  }

}
Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
