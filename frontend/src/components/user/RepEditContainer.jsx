import { connect } from 'react-redux';
import React from 'react';
import RepEdit from './RepEdit';
import { toggleRepresentative, fetchUserRepresentatives } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.user,
    representatives: state.entities.officials
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRepresentative: (id, type) => dispatch(toggleRepresentative(id, type)),
    fetchUserRepresentatives: userId => dispatch(fetchUserRepresentatives(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepEdit);

