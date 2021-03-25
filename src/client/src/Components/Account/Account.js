import React from "react";
import Manager from "../Manager/Manager";

function Account() {
  return (
    <div className="market">
      <div className="market__header">
        <div className="market__headerInfo">
          <h3>Aggregate A</h3>
          <p>Last updated at ...</p>
        </div>
        <div className="market__headerRight"></div>
      </div>
      <div className="market__container">
        <div className="market__items"></div>
        <Manager />
      </div>
    </div>
  );
}

export default Account;
