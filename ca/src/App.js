import "./App.css"
import { useState } from 'react';

function App() {
  let post = 'Hello World!';
  let [postName,setPost] = useState('Arsenal'); // 자주 변경될 것 같은 돔은 useState 로 관리.
  let [logo, setLogo] = useState('React Blog');
  return (
    <div className="App">
      <div className="nav">
        <h1>{logo}</h1>
      </div>
      <div className="list">
        <h1>{postName}</h1>
        <p>date</p>
      </div>
    </div>
  );
}

export default App;
