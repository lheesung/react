import "./App.css"
import { useState } from 'react';
import Modal from "./Modal"

function App() {
  let [postName, setPost] = useState(['Hello', 'World', '!!!!!']); // 자주 변경될 것 같은 값은 useState 로 관리.
  let [like, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <div className="nav">
        <h1>React Blog</h1>
      </div>
      {postName.map(function (a, i) {
        return (
          <div className="list">
            <h1 onClick={() => { setModal(!modal) }}>
              {postName[i]}
              <span onClick={(e) => {
                e.stopPropagation(); // avoid event bubling
                let copy = [...like];
                copy[i] += 1;
                setLikes(copy);
              }}>👍 {like[i]}</span>
            </h1>
            <p>date</p>
            <button onClick={() => {
              let copy = [...postName];
              copy.splice(i, 1);
              setPost(copy);
            }}>delete post</button>
          </div>
        )
      })}
      {modal === true ? <Modal post={postName} color={'#009EFF'} /> : null}

      <input type="text" onChange={(e) => {
          setInput(e.target.value);
          console.log(input)
        }}
      />
      <button onClick={() => {
        if(input){
          let copy = [...postName];
          copy.unshift(input); // copy array 에 ()안 요소 추가.
          setPost(copy);
        }
      }}>add post</button>
    </div>
  );
}



export default App;
