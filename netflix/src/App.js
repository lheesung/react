import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/signUp';
import SignUpPw from './pages/signUpPw';

function App() {
  const data = [
    {
      id: 1,
      name: 'background01',
      url: 'https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/8e71f493-34da-4c58-8d1b-d3b6878f271f/KR-ko-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg',
      alt: "background01"
    }  
  ]
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