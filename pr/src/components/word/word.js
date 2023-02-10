import React, { useState } from "react";
import * as W from "./wordStyle";

export default function WordChecklist(){
  const [wordList, setWordList] = useState([
    { word: "Add Some", checked: false },
    { word: "Words", checked: false }
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
    if (newWord.trim() === "") return; // .trim : 문자열 좌우 공백 제거
    setWordList([...wordList, { word: newWord, checked: false }]);
    setNewWord("");
  };

  const deleteWord = index => {
    setWordList(wordList.filter((word, i) => i !== index));
    /*
    주어진 함수의 테스트를 통과하는 모든 요소를 모아(true ? 유지 : false ? 버림 : "") 새로운 배열로 반환함. 
    callback 함수는 호출되는 배열을 변화시키지 않음.
    */
  };

  return (
    <W.container>
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
    </W.container>
  );
};

