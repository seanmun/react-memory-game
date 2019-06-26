import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col-md-3">
    <div className="card ">
  <div className="card-body">
    <div className="img-container">
    <img alt={props.name} src={props.image} />
    </div>
  </div>
</div>
</div>
  );
}

export default Card;
