import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(`http://localhost:3001/sushis/?_limit=4&_page=${pageCount}`)
    .then(resp => resp.json())
    .then(data => {
      setSushiList(data)
    })
  }, [pageCount])

  function handlePageCount() {
    setPageCount(pageCount + 1)
    console.log(pageCount)
  }

  function handlePlates(){
    const newPlate = 1;
    setPlates([...plates, newPlate])
  }

  function handleBudget(price, eaten) {
    if (eaten === false) {
      setBudget(budget - price);
      handlePlates();
    }
  }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} handlePageCount={handlePageCount} handleBudget={handleBudget} budget={budget} />
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export default App;
