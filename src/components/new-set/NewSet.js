import React, { Component } from "react";
import { connect } from "react-redux";

class NewSet extends Component {
  render() {
    return <div>HEJ!</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(NewSet);
