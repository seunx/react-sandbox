import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    return (
      <div>
        <h1>StreamList</h1>
        {this.props.streams.map(stream => (
          <div className="item">
            <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="descriptions" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
