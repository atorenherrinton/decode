import React, { useState } from "react";
import {
  convertToArray,
  convertToObject,
  countCharacters,
  findHighest,
} from "./utils/utils";

const App = () => {
  const [characterCount, setCharacterCount] = useState([]);
  const [highCountChars, setHighCountChars] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  const handleCalculate = () => {
    setCharacterCount(convertToArray(countCharacters(inputValue)));

    setHighCountChars(
      convertToObject(findHighest(convertToArray(countCharacters(inputValue))))
    );
    setText(inputValue);
    setInputValue("");
  };

  const handleTextAreaChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div>Spy Counter</div>
      <p>Count the number of times a character appears in a text</p>
      <ul>
        {characterCount.map((character) => (
          <li key={character[0]}>{character[0] + ": " + character[1]}</li>
        ))}
      </ul>
      <p>
        {[...text].map((char, idx) =>
          highCountChars[char] ? (
            <mark key={idx}>{char}</mark>
          ) : (
            <span key={idx}>{char}</span>
          )
        )}
      </p>
      <div>
      <textarea onChange={handleTextAreaChange} value={inputValue} />
      </div>
      <button disabled={!inputValue} onClick={handleCalculate}>
        Calculate
      </button>
    </div>
  );
};

export default App;
