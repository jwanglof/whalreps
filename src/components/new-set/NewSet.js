import React, { Component } from 'react';
import {connect} from 'react-redux';

export class NewSet extends Component {
  render() {
    return (
      <div>Men tjena!</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lul: 'hej'
  }
}

export default connect(mapStateToProps)(NewSet);
