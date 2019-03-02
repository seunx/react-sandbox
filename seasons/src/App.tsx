import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return (
      <>
        <h1>My Application</h1>
        <div>Latitude: </div>
      </>
    );
  }
}

export default App;
