import './Input.css';
import React,{ useState } from 'react';

function Input(){
  const [charArray, setCharArray] = useState([]);

  // Handle change in the text area
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const inputArray = inputText.split(''); // Split input into individual characters
    setCharArray(inputArray);
  };

  return (
    <div align="center">
      <h1>Type text to analyse:</h1>
      <textarea rows="7"
        value={charArray.join('')} // Join array to form the textarea value
        onChange={handleInputChange}
      >Type Here</textarea>
      <br/>
     <button type="button">Analyse</button>
     <button type="button">Reset</button>
     <p>Number of characters (including spaces): {charArray.length}</p>
     <p>Number of characters (without spaces): {charArray.filter(char => char !== ' ').length}</p>
     <p>Number of words: {charArray.join('').trim().split(/\s+/).filter(Boolean).length}</p>
     <p>Number of sentences: {charArray.join('').split(/[.!?]/).filter(Boolean).length}</p>
    </div>
  );
}



export default Input  ;