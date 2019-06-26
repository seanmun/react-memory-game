import React from "react";

// function Board(props) {
//   return <div className="wrapper">{props.children}</div>;
// }

function Board(props) {
  return <div className="container">
    <div className="row">
        
{props.children}
        
    </div>
  </div>;
}

export default Board;
