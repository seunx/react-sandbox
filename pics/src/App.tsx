import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

class App extends Component {
  onSearchSubmit(term: any) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;