import React from "react";
import Textbox from "./Textbox";
import TargetText from "./TargetText";
import Clock from "./Clock";
import GameOver from "./GameOver";
import getWord from "../wordlist";
import Exchange from "./Exchange";

const Game = () => {
  const text = ["hello", "world", "and", "welcome", "to", "our", "game"];
  let [pastWords, setPastWords] = React.useState([]); // (expected, actual)
  let [nextWords, setNextWords] = React.useState(text);
  let [currWord, setCurrWord] = React.useState("");

  const startTimeSeconds = 25;
  let [timeLeft, setTimeLeft] = React.useState(startTimeSeconds);
  let [gameOver, setGameOver] = React.useState(false);

  let [exchanges, setExchanges] = React.useState({
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
  });

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
    let id = setInterval(() => updateTimeLeft(-1), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  function checkWord(expected, submitted) {
    let submitted_mapped = Array.from(submitted)
      .map((c) => {
        if (exchanges[c]) return exchanges[c];
        else return c;
      })
      .join("");
    console.log(submitted, submitted_mapped, expected, Array.from(submitted));
    return expected === submitted_mapped;
  }

  function maybeExchangeLetters() {
    if (Math.random() < 0.3) {
      let i = Math.floor(Math.random() * 26);
      let j = Math.floor(Math.random() * 25);
      if (j >= i) j = j + 1;
      i = Object.keys(exchanges)[i];
      j = Object.keys(exchanges)[j];
      let tmp = exchanges[i];
      exchanges[i] = exchanges[j];
      exchanges[j] = tmp;
    }
  }

  function submitWord(word) {
    if (word[word.length - 1] === " ") {
      word = word.substring(0, word.length - 1);
      const expected = nextWords[0];
      const correctness = checkWord(expected, word);
      updateTimeLeft(correctness ? 3 : -1);
      maybeExchangeLetters();
      setPastWords([...pastWords, [expected, correctness]]);
      setNextWords(nextWords.slice(1));
      setCurrWord("");
      setNextWords((l) => {
        return [...l, getWord()];
      });
    } else {
      setCurrWord(word);
    }
  }
  if (!gameOver) {
    return (
      <div>
        <Exchange exchanges={exchanges} />
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
