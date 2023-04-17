import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, handlePageCount, handleBudget, budget }) {
  
  const sushiToRender = sushiList.map((sushi) => {
    return <Sushi key={sushi.name + sushi.id} sushi={sushi} handleBudget={handleBudget} budget={budget} />
  })
  
  return (
    <div className="belt">
      {sushiToRender}
      <MoreButton handlePageCount={handlePageCount} />
    </div>
  );
}

export default SushiContainer;
