import {connect} from 'react-redux';
import React from 'react';
import Edit from './Edit';

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  }
}

export default connect(mapStateToProps, null)(Edit);

