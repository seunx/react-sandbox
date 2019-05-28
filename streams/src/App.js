import React from "react";
import { Route } from "react-router-dom";

const pageOne = () => {
  return <h1>Page One</h1>;
};
const pageTwo = () => {
  return <h1>Page Two</h1>;
};

function App() {
  return (
    <div>
      <Route path="/" exact component={pageOne} />
      <Route path="/pageTwo" component={pageTwo} />
    </div>
  );
}

export default App;
