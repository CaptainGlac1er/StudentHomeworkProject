import { connect } from 'react-redux';
import { switchPage } from 'actions/pages';
import Footer from 'components/Footer';

function mapStateToProps(store) {
  return {
    page: store.pages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: page => dispatch(switchPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
