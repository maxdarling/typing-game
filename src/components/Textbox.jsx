import React from "react";

const Textbox = ({ updateWord }) => {
  let curr = "";
  return (
    <input
      id="textbox"
      type="text"
      autoFocus
      onChange={(e) => updateWord(e.target.value)}
    />
  );
};

export default Textbox;
