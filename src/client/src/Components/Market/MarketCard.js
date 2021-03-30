import React from "react";
import "./MarketCard.css";
import InputOption from "../Shared/InputOption";
export const MarketCard = ({ markets }) => {
  //console.log(markets);
  //return <div>{movies.length}</div>;

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
                  <InputOption title="Open" link="/add" />
                  <InputOption title="Edit" link="/" />
                  <InputOption title="Delete" link="/" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

/* Praesent elementum facilisis leo vel fringilla est ullamcorper.
                Neque ornare aenean euismod elementum nisi quis eleifend. Congue
                nisi vitae suscipit tellus mauris. Eget lorem dolor sed viverra.
                Nisi porta lorem mollis aliquam ut porttitor leo a. Tincidunt
                nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ac
                ut consequat semper viverra nam. Fusce id velit ut tortor
                pretium. */
