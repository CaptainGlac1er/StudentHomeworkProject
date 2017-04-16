import { connect } from 'react-redux';
import { changeFilter } from 'actions/filter';
import TextField from 'material-ui/TextField';

function mapStateToProps(store) {
  return {
    value: store.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: e => dispatch(changeFilter(e.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
