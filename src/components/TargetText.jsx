import React from "react";

const TypedWord = ({ expectedWord, typedWord }) => {
  let correctness = expectedWord === typedWord ? "correct" : "incorrect";
  return <span className={correctness}> {expectedWord} </span>;
};

const TargetText = ({ pastWords, nextWords }) => {
  let previousWords = pastWords.map(([expectedWord, typedWord], i) => {
    return (
      <TypedWord key={i} expectedWord={expectedWord} typedWord={typedWord} />
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
