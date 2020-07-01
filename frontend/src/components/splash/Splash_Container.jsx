import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Splash from "./Splash";


const mapStateToProps = (state) => {
  return {
    user: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
