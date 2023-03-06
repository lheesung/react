import "./App.css"
import { useState } from 'react';

function App() {
  let [postName, setPost] = useState(['Hello', 'World', '!!!!!']); // 자주 변경될 것 같은 돔은 useState 로 관리.
  let [like, setLikes] = useState([0, 0, 0]);
  let [logo, setLogo] = useState('React Blog');
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="nav">
        <h1>{logo}</h1>
      </div>
      {postName.map(function (a, i) {
        return (
          <div className="list">
            <h1  onClick={() => { setModal(!modal) }}>{postName[i]}</h1>
            <span onClick={() => {
              let copy = [...like];
              copy[i] += 1;
              setLikes(copy);
            }}>👍 {like[i]}</span>
            <p>date</p>
          </div>
        )
      })}
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>내용</p>
      <p>날짜</p>
    </div>
  )
}

export default App;
