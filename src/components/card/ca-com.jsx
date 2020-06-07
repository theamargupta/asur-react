import React from "react";
import "./ca-style.css";
export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.asur.id}?set=set2&size=250x220`} alt=""/>
    <h2>{props.asur.name}</h2>
    <p>{props.asur.email}</p>
  </div>
);