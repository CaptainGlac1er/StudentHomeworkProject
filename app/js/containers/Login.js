import { connect } from 'react-redux';
import Login from 'pages/Login';
import { loginUser, registerUser } from 'actions/login';
import { updateMessage } from 'actions/snackbarMessage';

function mapStateToProps(store) {
  return {
    user: store.user || '',
    snackbarMessage: store.snackbarMessage || '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: username => dispatch(loginUser(username)),
    register: username => dispatch(registerUser(username)),
    snackbarMessageEdit: message => dispatch(updateMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
