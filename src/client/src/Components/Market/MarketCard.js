import React from "react";
import "./MarketCard.css";
import InputOption from "../Shared/InputOption";

export const MarketCard = ({ markets }) => {
  //console.log(markets);
  //
  return (
    <>
      {markets.map((market) => {
        return (
          <div key={market.title} className="marketcard">
            <div className="marketcard__thumbnail">
              <img src={market.baseURL} alt="" />
            </div>
            <div className="marketcard__content">
              <div className="marketcard__title">{market.title}</div>
              <div className="marketcard__description">
                <p>
                  Published: {market.year} | Rated: {market.rating}
                </p>
                <p>{market.describe}</p>
                <div className="marketcard__navigation">
                  <InputOption
                    title="Manage"
                    link={`/listing/${market.title}`}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
