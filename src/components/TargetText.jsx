import React from "react";

const TargetText = ({ pastWords, nextWords }) => {
  const formatted = nextWords.map((t, i) => (
    <span key={i} style={{ fontSize: "48px", fontWeight: "bold" }}>
      {t + " "}
    </span>
  ));
  return <div>{formatted}</div>;
};

export default TargetText;
