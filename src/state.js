import React from 'react';

const text = ["ciehnatie", "cniethaine", "cnietahei"];

let [pastWords, setPastWords] = React.useState([]); // (expected, actual)
let [nextWords, setNextWords] = React.useState(text);

let [currWord, setCurrWord] = React.useState("");


function updateWord(word) {
    if (word[word.length - 1] === " ") {
        word = word.substring(0, word.length - 2);
        setPastWords([...pastWords, [nextWords[0], word]]);
        setNextWords(nextWords.slice(1));
        setCurrWord("");
    } else {
        setCurrWord(word);
    }
}

export {updateWord, pastWords, nextWords};