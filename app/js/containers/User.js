import { connect } from 'react-redux';
import User from 'components/User';
import { loginUser, logoutUser, registerUser } from 'actions/login';

function mapStateToProps(store) {
  return {
    user: store.user || '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, message) => dispatch(loginUser(username, message)),
    logout: () => dispatch(logoutUser()),
    registerUser: username => dispatch(registerUser(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
