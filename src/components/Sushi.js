import React, { useState } from "react";

function Sushi({ sushi, handlePlates, handleBudget, budget }) {
  const [eaten, setEaten] = useState(false);

  function handleClick() {
    if (budget >= sushi.price) {
    setEaten(true);
    handleBudget(sushi.price, eaten)
      }
    }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
