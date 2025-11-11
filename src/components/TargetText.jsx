import React from 'react';
import {pastWords, nextWords} from '../state';
// upcoming words
// past words (with info about correctness)

const TargetText = () => {

  const formatted = nextWords.map((t, i) => (
    <span key={i} style={{ fontSize: '48px', fontWeight: 'bold' }}>
      {t + " "}
    </span>
  ))
  return (
    <div>
      {formatted}
    </div>
  );
};

export default TargetText;

