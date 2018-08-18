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
    lul: 'hej',
    foo: 'bar',
    bar: 'foo'
  }
}

export default connect(mapStateToProps)(NewSet);
