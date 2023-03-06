import "./App.css"
import { useState } from 'react';
import Modal from "./Modal"

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
            <h1  onClick={() => { setModal(!modal) }}>
              {postName[i]}
              <span onClick={(e) => {
              e.stopPropagation(); // avoid event bubling
              let copy = [...like];
              copy[i] += 1;
              setLikes(copy);
            }}>👍 {like[i]}</span>
              </h1>
            <p>date</p>
          </div>
        )
      })}
      {modal === true ? <Modal post ={postName} color = {'#009EFF'} /> : null}

      <input onChange={(e)=>{console.log(e.target.value)}}/>
    </div>
  );
}



export default App;
