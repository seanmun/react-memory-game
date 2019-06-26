import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import deck from "./deck.json";

function App() {
  return (
      <div>
        <Jumbotron/>
        <Board>
        
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
          <Card
          name={deck[5].name}
          image={deck[5].image}
          suit={deck[5].suit}
          />
          <Card
          name={deck[6].name}
          image={deck[6].image}
          suit={deck[6].suit}
          />
          <Card
          name={deck[7].name}
          image={deck[7].image}
          suit={deck[7].suit}
          />
          <Card
          name={deck[8].name}
          image={deck[8].image}
          suit={deck[8].suit}
          />
          <Card
          name={deck[9].name}
          image={deck[9].image}
          suit={deck[9].suit}
          />
          <Card
          name={deck[10].name}
          image={deck[10].image}
          suit={deck[10].suit}
          />
          <Card
          name={deck[11].name}
          image={deck[11].image}
          suit={deck[11].suit}
          />
          <Card
          name={deck[12].name}
          image={deck[12].image}
          suit={deck[12].suit}
          />
        </Board>
      </div>
  );
}

export default App;
