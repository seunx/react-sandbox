import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends Component<any, any> {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
