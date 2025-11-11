import React from "react";

const GameOver = () => {
  return (
    <div id="gameover">
      Game Over! Congratulation, you lasted{" "}
      {Math.trunc(performance.now() / 1000)} seconds!
    </div>
  );
};

export default GameOver;
