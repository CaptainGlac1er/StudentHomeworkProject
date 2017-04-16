import { connect } from 'react-redux';
import Login from 'pages/Login';
import { loginUser } from 'actions/login';

function mapStateToProps(store) {
  return {
    user: store.user || '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: username => dispatch(loginUser(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
