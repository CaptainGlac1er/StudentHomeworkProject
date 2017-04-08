import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { ToolbarGroup,Toolbar, ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu'; 
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';


export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Toolbar>
          <ToolbarGroup className='left'>
            <img className='left' alt='Assignment Tracker'/>
          </ToolbarGroup>
          <ToolbarGroup className ='right'>
            <div className='left'>Monday</div>
            <ToolbarSeparator className='center'/>
            <div className='right'>1:27</div>
          </ToolbarGroup>
        </Toolbar>
       );
  }

}
