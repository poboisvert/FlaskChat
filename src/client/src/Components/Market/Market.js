import React, { useEffect, useState } from "react";
import "./Market.css";
import { MarketCard } from "./MarketCard";
import Navigation from "../Navigation/Navigation";

function Market() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    fetch("/markets").then((response) =>
      response.json().then((data) => {
        setMarkets(data.markets);
      })
    );
  }, []);
  //  console.log(markets);
  return (
    <>
      <div className="market">
        <div className="market__container">
          <div className="market__items">
            <MarketCard markets={markets} />
          </div>
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Market;
