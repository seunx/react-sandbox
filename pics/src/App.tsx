import React, { Component } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term: any) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onsubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
