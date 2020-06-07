import React from "react";
import { Card } from "../card/ca-com"
import "./ca-li-style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.asurs.map((asur) => (
        <Card key={asur.id} asur={asur}/>
      ))}
    </div>
  );
};
