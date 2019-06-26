import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card text-white bg-dark mb-3">
  <div className="card-header"> {props.name}</div>
  <div className="card-body">
    <h5 className="card-title">{props.suit} </h5>
    <div className="img-container">
    <img alt={props.name} src={props.image} />
    </div>
  </div>
</div>
  );
}

export default Card;
