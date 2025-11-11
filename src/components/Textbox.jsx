import React from "react";

const Textbox = ({ updateWord, currWord }) => {
  let curr = "";
  return (
    <input
      id="textbox"
      type="text"
      value={currWord}
      autoFocus
      onChange={(e) => updateWord(e.target.value)}
    />
  );
};

export default Textbox;
