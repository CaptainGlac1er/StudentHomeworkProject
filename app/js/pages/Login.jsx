import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { ToolbarGroup, Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import theme from 'theme';

const style = {
  textAlign: 'center',
};

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      login: { username: '', password: '' },
      registration: { username: '', password: '', secpassword: '' }
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleRegistrationChange = this.handleRegistrationChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.tabOne = this.tabOne.bind(this);
  }
  handleLoginChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.state.login[name] = value;
  }
  handleRegistrationChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.state.registration[name] = value;
  }
  handleLogin() {
    if (typeof (this.state.login && this.state.login.username) !== 'undefined') {
      this.props.login(this.state.login.username);
    }
  }
  tabOne = () => (
    <Paper style={style}>
      <TextField
        name="username"
        hintText=""
        floatingLabelText="username"
        onChange={this.handleLoginChange}
      />
      <br />
      <TextField
        name="password"
        hintText=""
        type="password"
        floatingLabelText="password"
        onChange={this.handleInputChange}
      />
      <br />
      <FlatButton primary label="Log in" onClick={this.handleLogin} />
    </Paper>

  )

  tabTwo = () => (
    <Paper style={style}>
      <TextField
        name="username"
        hintText=""
        floatingLabelText="username"
        onChange={this.handleRegistrationChange}
      />
      <br />
      <TextField
        hintText=""
        type="password"
        floatingLabelText="password"
        onChange={this.handleRegistrationChange}
      />
      <br />
      <TextField
        hintText=""
        type="password"
        floatingLabelText="re-enter password"
        onChange={this.handleRegistrationChange}

      />
      <br />
      <FlatButton primary label="Register" />
    </Paper>

  )
  render() {
    return (
      <div>
        <Toolbar style={{ backgroundColor: theme.primary1Color }}>
          <ToolbarGroup className="left">
            <ToolbarTitle text="Assignment Tracker" />
          </ToolbarGroup>
          <ToolbarGroup className="right">
            <ToolbarTitle className="left" text={this.state.day} />
            <ToolbarTitle className="right" text={this.state.time} />
          </ToolbarGroup>
        </Toolbar>
        <div>
          <Tabs>
            <Tab label="Login">
              {this.tabOne()}
            </Tab>
            <Tab label="Register">
              {this.tabTwo()}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Login;
