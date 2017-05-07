import { connect } from 'react-redux';
import Header from 'components/Header';
import { logoutUser } from 'actions/login';


function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutUser()),
  };
}

export default connect(null, mapDispatchToProps)(Header);
