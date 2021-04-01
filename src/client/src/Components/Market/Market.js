import React, { useEffect, useState } from "react";
import "./Market.css";
import { MarketCard } from "./MarketCard";
import Navigation from "../Navigation/Navigation";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

function Market() {
  const [markets, setMarkets] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("/markets").then((response) =>
      response.json().then((data) => {
        setMarkets(data.markets);
      })
    );
  }, []);

  const marketFilter = markets.filter((p) => p.channel === name);
  //console.log(marketFilter);
  //console.log(markets);

  //  console.log(markets);
  return (
    <>
      <div className="market">
        <div className="market__container">
          <div className="market__items">
            <MarketCard
              markets={marketFilter.length > 0 ? marketFilter : markets}
            />
          </div>
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Market;
