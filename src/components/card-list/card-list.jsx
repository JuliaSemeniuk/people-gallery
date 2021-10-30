import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.people.map((person) => (
        <Card key={person.id} person={person} /> //key -> React needs to know what element needs update if one of elements in array has a value that changing
      ))}
    </div>
  );
};
