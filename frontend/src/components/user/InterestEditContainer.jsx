import { connect } from 'react-redux';
import InterestEdit from './InterestEdit';
import {editUser} from '../../actions/session_actions'

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: data => dispatch(editUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestEdit);

