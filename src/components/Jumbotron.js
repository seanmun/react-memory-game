import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron">
  <h1 className="display-4">React Memory Game</h1>
  <p className="lead">Choose a card, any card. Earn points for choosing a new card. Lose points for choosing the same card twice. </p>
  <hr className="my-4"></hr>
 
  <a className="btn btn-primary btn-lg" href="#" role="button">Play Game</a>
</div>
  );
}

export default Jumbotron;