import React from "react";

const Loader = (props: any) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
