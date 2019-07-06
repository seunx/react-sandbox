import React from "react";

export default ({ index, end }) => {
  return (
    <div className="slide-index">
      <p className="index">
        {index}/{end}
      </p>
    </div>
  );
};
