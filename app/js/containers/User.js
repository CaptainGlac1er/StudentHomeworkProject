import { connect } from 'react-redux';
import User from 'components/User';
import { loginUser, logoutUser } from 'actions/login';

function mapStateToProps(store) {
  return {
    user: store.user || '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: username => dispatch(loginUser(username)),
    logout: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
