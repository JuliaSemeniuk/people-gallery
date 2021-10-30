import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${
          props.person.id + 6
        }?set=set2&size=180x180`}
      />
      <p>{props.person.name}</p>
    </div>
  );
};
