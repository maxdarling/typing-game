import React from "react";
import Textbox from "./Textbox";
import TargetText from "./TargetText";

const Game = () => {
  const text = ["ciehnatie", "cniethaine", "cnietahei"];
  let [pastWords, setPastWords] = React.useState([]); // (expected, actual)
  let [nextWords, setNextWords] = React.useState(text);

  let [currWord, setCurrWord] = React.useState("");

  function updateWord(word) {
    if (word[word.length - 1] === " ") {
      word = word.substring(0, word.length - 1);
      setPastWords([...pastWords, [nextWords[0], word]]);
      setNextWords(nextWords.slice(1));
      setCurrWord("");
    } else {
      setCurrWord(word);
    }
  }

  return (
    <div>
      <Textbox currWord={currWord} updateWord={updateWord} />
      <TargetText nextWords={nextWords} pastWords={pastWords} />
    </div>
  );
};

export default Game;
