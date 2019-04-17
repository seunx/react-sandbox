import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

export class PostList extends Component {
  render() {
    return (
      <div>
        <h1> Post List</h1>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
