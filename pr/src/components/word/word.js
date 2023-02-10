import React, { useState } from "react";

const WordChecklist = () => {
  const [wordList, setWordList] = useState([
    { word: "hello", checked: false },
    { word: "world", checked: false }
  ]);
  const [newWord, setNewWord] = useState("");

  const toggleCheck = index => {
    setWordList(
      wordList.map((word, i) => {
        if (i === index) {
          return { ...word, checked: !word.checked };
        }
        return word;
      })
    );
  };

  const addWord = () => {
    if (newWord.trim() === "") return;
    setWordList([...wordList, { word: newWord, checked: false }]);
    setNewWord("");
  };

  const deleteWord = index => {
    setWordList(wordList.filter((word, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {wordList.map((word, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={word.checked}
              onChange={() => toggleCheck(index)}
            />
            {word.word}
            <button onClick={() => deleteWord(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add word"
        value={newWord}
        onChange={e => setNewWord(e.target.value)}
      />
      <button onClick={addWord}>Add</button>
    </div>
  );
};

export default WordChecklist;
