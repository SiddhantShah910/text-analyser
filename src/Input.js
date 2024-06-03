import './Input.css';
import React, { useState } from 'react';

function Input() {
  const [charArray, setCharArray] = useState([]);
  const [analysis, setAnalysis] = useState(null);

  // Handle change in the text area
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setCharArray(inputText.split('')); // Split input into individual characters
  };

  // Handle analysis
  const handleAnalyse = () => {
    const joinedText = charArray.join('');
    const numCharsIncludingSpaces = charArray.length;
    const numCharsWithoutSpaces = charArray.filter(char => char !== ' ').length;
    const numWords = joinedText.trim().split(/\s+/).filter(Boolean).length;
    const numSentences = joinedText.split(/[.!?]/).filter(Boolean).length;

    setAnalysis({
      numCharsIncludingSpaces,
      numCharsWithoutSpaces,
      numWords,
      numSentences,
    });
  };

  // Handle reset
  const handleReset = () => {
    setCharArray([]);
    setAnalysis(null);
  };

  return (
    <div align="center">
      <h1>Type text to analyse:</h1>
      <textarea
        rows="7"
        value={charArray.join('')} // Join array to form the textarea value
        onChange={handleInputChange}
      >Type Here</textarea>
      <br />
      <button type="button" onClick={handleAnalyse}>Analyse</button>
      <button type="button" onClick={handleReset}>Reset</button>
      {analysis && (
        <>
          <p>Number of characters (including spaces): {analysis.numCharsIncludingSpaces}</p>
          <p>Number of characters (without spaces): {analysis.numCharsWithoutSpaces}</p>
          <p>Number of words: {analysis.numWords}</p>
          <p>Number of sentences: {analysis.numSentences}</p>
        </>
      )}
    </div>
  );
}

export default Input;
