import React from "react";

const Textbox = ({ submitWord, currWord }) => {
  let curr = "";
  return (
    <input
      id="textbox"
      type="text"
      value={currWord}
      autoFocus
      onBlur={(e) => e.target.focus()}
      onChange={(e) => submitWord(e.target.value)}
    />
  );
};

export default Textbox;
