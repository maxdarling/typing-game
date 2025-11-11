import React from "react";

const TypedWord = ({ expectedWord, correctness }) => {
  let c = correctness ? "correct" : "incorrect";
  return <span className={c}> {expectedWord} </span>;
};

const TargetText = ({ pastWords, nextWords }) => {
  let previousWords = pastWords.map(([expectedWord, correctness], i) => {
    return (
      <TypedWord
        key={i}
        expectedWord={expectedWord}
        correctness={correctness}
      />
    );
  });
  const upcomingWords = nextWords.map((t, i) => (
    <span key={i} className={i === 0 ? "selected" : ""}>
      {t + " "}
    </span>
  ));
  return (
    <div id="word-list">
      {previousWords}
      {upcomingWords}
    </div>
  );
};

export default TargetText;
