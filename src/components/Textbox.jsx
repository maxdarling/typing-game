import React from 'react';
import { updateWord } from '../state';


const Textbox = () => {
  let curr = "";
  return (
    <input
      id="textbox"
      type="text"
      autoFocus
      onChange={(e) => updateWord(e.target.value)} />
  );
};

export default Textbox;

