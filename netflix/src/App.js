import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/signUp';
import SignUpPw from './pages/signUpPw';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<SignUp />}></Route>
          <Route path='/password' element={<SignUpPw />}></Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;