import React from "react";

export default ({ direction, symbol, btnClick }) => {
  return (
    <div className={`btn btn-${direction}`} onClick={btnClick}>
      <p className="symbol">{symbol}</p>
    </div>
  );
};
