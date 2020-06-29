import {connect} from 'react-redux';
import React from 'react';
import ContactEdit from './ContactEdit';

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  }
}

export default connect(mapStateToProps, null)(ContactEdit);

