import React from "react";
import SongList from "./components/SongList";

import "./App.css";
import SongDetail from "./components/SongDetail";

export default () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};
