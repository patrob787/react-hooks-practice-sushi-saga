import React from "react";

function MoreButton({ handlePageCount }) {
  
  function handleClick(e) {
    handlePageCount();
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
