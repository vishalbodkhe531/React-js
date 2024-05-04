import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { cardInfo } from "./data/cardInfo";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-white p-4 rounded-xl m b-10">
        Laptop Sell !!
      </h1>
      <div className="flex flex-wrap justify-center m-5">
        {cardInfo.map((card) => (
          <Card
            name={card.name}
            info={card.info}
            imgSrc={card.img}
            key={Math.random()}
          />
        ))}
      </div>
    </>
  );
}

export default App;
