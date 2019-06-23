import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Scoreboard from "./components//Scoreboard";
import Board from "./components//Board";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Scoreboard />
        <Board/>
      </div>
    </Router>
  );
}

export default App;
