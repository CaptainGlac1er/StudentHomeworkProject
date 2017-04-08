import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu'; 
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
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
        <TopBar></TopBar>
        <SubBar></SubBar>
        <div>navbar</div>
        {this.props.children}
      </div>);
  }

}
Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
