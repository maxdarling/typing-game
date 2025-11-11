import React from "react";
import Textbox from "./Textbox";
import TargetText from "./TargetText";
import Clock from "./Clock";
import GameOver from "./GameOver";

const Game = () => {
  const text = ["hello", "world", "and", "welcome", "to", "our", "game"];
  let [pastWords, setPastWords] = React.useState([]); // (expected, actual)
  let [nextWords, setNextWords] = React.useState(text);
  let [currWord, setCurrWord] = React.useState("");

  const startTimeSeconds = 10;
  let [timeLeft, setTimeLeft] = React.useState(startTimeSeconds);
  let [gameOver, setGameOver] = React.useState(false);

  function updateTimeLeft(inc) {
    setTimeLeft((t) => {
      if (t + inc <= 0) {
        setGameOver(true);
        return 0;
      }
      return t + inc;
    });
  }

  React.useEffect(() => {
    setInterval(() => updateTimeLeft(-1), 1000);
  }, []);

  function submitWord(word) {
    if (word[word.length - 1] === " ") {
      word = word.substring(0, word.length - 1);
      const expected = nextWords[0];
      const correctness = word === expected;
      updateTimeLeft(correctness ? 1 : -1);

      setPastWords([...pastWords, [expected, word]]);
      setNextWords(nextWords.slice(1));
      setCurrWord("");
    } else {
      setCurrWord(word);
    }
  }
  if (!gameOver) {
    return (
      <div>
        <Clock timeLeft={timeLeft} />
        <Textbox currWord={currWord} submitWord={submitWord} />
        <TargetText nextWords={nextWords} pastWords={pastWords} />
      </div>
    );
  } else
    return (
      <div>
        <GameOver />
      </div>
    );
};

export default Game;
