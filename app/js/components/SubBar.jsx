import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { ToolbarGroup,Toolbar,ToolbarSeparator } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu'; 
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';


export default class SubBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Toolbar>
          <ToolbarGroup className='left'>
            <img className='left' alt='Assignment Tracker'/>
          </ToolbarGroup>
          <ToolbarGroup>
            <input type='text' value='Search Text'/>
          </ToolbarGroup>
          <ToolbarGroup className ='right'>
            <input type='button' value='Notifications'/>
            <ToolbarSeparator classname='center'/>
            <img className='right' alt='user avatar'/>
          </ToolbarGroup>
        </Toolbar>
       );
  }

}
