import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import RepEdit from "./RepEdit";
import {
  fetchUserRepresentatives,
  toggleRepresentative,
} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    officials: state.entities.officials,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRepresentative: (id, type) => dispatch(toggleRepresentative(id)),
    fetchUserRepresentatives: () => dispatch(fetchUserRepresentatives()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RepEdit)
);
