import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const MainPage = () => (
  <div>
      Please login
      <FlatButton primary label="Log in" onClick={() => this.props.login('Bob Ross')} />
  </div>

);
MainPage.propTypes = {
  user: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};
export default MainPage;
