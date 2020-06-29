import { connect } from 'react-redux';
import React from 'react';
import RepEdit from './RepEdit';
import { toggleRepresentative } from '../../actions/search_actions';
import {fetchUserRepresentatives } from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    officials: state.entities.officials
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRepresentative: (id, type) => dispatch(toggleRepresentative(id, type)),
    fetchUserRepresentatives: () => dispatch(fetchUserRepresentatives()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepEdit));

