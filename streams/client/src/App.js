import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="ui container">
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </div>
    </Router>
  );
}

export default App;
