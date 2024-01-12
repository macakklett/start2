import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
      id: 1,
      date: new Date(2023, 9, 8),
      description: "Notebook",
      amount: 500
  },
  {
      id: 2,
      date: new Date(2022, 6, 18),
      description: "Smartphone",
      amount: 250
  },
  {
      id: 3,
      date: new Date(2022, 1, 22),
      description: "Jeans",
      amount: 100
  }
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(previousCosts => {
      return [cost, ...previousCosts];
    });
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs}/>
    </div>
  );
}

export default App;
