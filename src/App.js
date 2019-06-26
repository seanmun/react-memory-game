import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import deck from "./deck.json";

function App() {
  return (
      <div>
        
        <Board>
        <Jumbotron/>
          <Card
          name={deck[0].name}
          image={deck[0].image}
          suit={deck[0].suit}
          />
          <Card
          name={deck[1].name}
          image={deck[1].image}
          suit={deck[1].suit}
          />
          <Card
          name={deck[2].name}
          image={deck[2].image}
          suit={deck[2].suit}
          />
          <Card
          name={deck[3].name}
          image={deck[3].image}
          suit={deck[3].suit}
          />
          <Card
          name={deck[4].name}
          image={deck[4].image}
          suit={deck[4].suit}
          />
        </Board>
      </div>
  );
}

export default App;
