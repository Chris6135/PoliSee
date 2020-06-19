import React from 'react';
import {connect} from 'react-redux';
import {fetchRepresentatives} from '../../actions/search_actions';
import {logout} from '../../actions/session_actions';
import Header from './Header';

const mapStateToProps = (state) => {
  return{
    user: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepresentatives: (address) => dispatch(fetchRepresentatives(address)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)