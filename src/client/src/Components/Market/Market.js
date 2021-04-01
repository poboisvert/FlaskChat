import React, { useEffect, useState } from "react";
import "./Market.css";
import { MarketCard } from "./MarketCard";
// Routing
import Navigation from "../Navigation/Navigation";
import { useParams, useRouteMatch } from "react-router-dom";

const Market = () => {
  const [markets, setMarkets] = useState([]);
  const { name } = useParams();
  // console.log(name);

  useEffect(() => {
    fetch("/markets").then((res) =>
      res.json().then((data) => {
        setMarkets(data.markets);
      })
    );
  }, []);

  const marketFilter = markets.filter((p) => p.channel === name);

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
};

export default Market;
