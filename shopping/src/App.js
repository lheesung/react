import Main from "./pages/Main/main";
import Detail from "./routes/Detail/Detail";
import "./App.css"
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route />
    </Routes>
  );
}

export default App;
