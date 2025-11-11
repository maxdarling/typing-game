import React from "react";

const GameOver = () => {
  let s = Math.trunc(performance.now() / 1000);
  return (
    <div id="gameover">Game Over! Congratulation, you lasted {s} seconds!</div>
  );
};

export default GameOver;
