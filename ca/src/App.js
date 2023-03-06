import "./App.css"
import { useState } from 'react';

function App() {
  let [postName,setPost] = useState(['Hello', 'World', '!!!!!']); // 자주 변경될 것 같은 돔은 useState 로 관리.
  let [like,setLikes] = useState(0);
  let [logo, setLogo] = useState('React Blog');
  return (
    <div className="App">
      <div className="nav">
        <h1>{logo}</h1>
      </div>
      
      <button onClick={() => {
        let copy = [...postName];
        copy[0] = 'Hola';
        setPost(copy);
        }}>change state</button>

      <div className="list">
        <h1>{postName[0]} <span onClick={() => {setLikes(like++)}}>👍</span> {like} </h1>
        <p>date</p>
      </div>

      <div className="list">
        <h1>{postName[1]}</h1>
        <p>date</p>
      </div>

      <div className="list">
        <h1>{postName[2]}</h1>
        <p>date</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>내용</p>
        <p>날짜</p>
      </div>
  )
}

export default App;
