import React from 'react';
import {connect} from 'react-redux';
import {fetchRepresentatives} from '../../actions/search_actions'
import Header from './Header'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepresentatives: (address) => dispatch(fetchRepresentatives(address))
  }
}

export default connect(null, mapDispatchToProps)(Header)