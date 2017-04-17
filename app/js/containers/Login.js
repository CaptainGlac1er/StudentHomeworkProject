import { connect } from 'react-redux';
import Login from 'pages/Login';
import { loginUser, registerUser } from 'actions/login';

function mapStateToProps(store) {
  return {
    user: store.user || '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: username => dispatch(loginUser(username)),
    register: username => dispatch(registerUser(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
