import Main from "./pages/main";
import "./App.css"
import {Route, Routes, Link} from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route />
      </Routes>
    </>
  );
}

export default App;
