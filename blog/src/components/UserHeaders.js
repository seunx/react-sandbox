import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeaders extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

// Fining State each unique user with in the users array that matches the post id

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeaders);
