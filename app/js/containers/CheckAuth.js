import { connect } from 'react-redux';
import CheckAuth from 'components/CheckAuth';
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth);
