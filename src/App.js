import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Aboutme from './Components/Aboutme/Aboutme';
import Checkout from './Components/Checkout/Checkout';
import Errorpage from './Components/Errorpage/Errorpage';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase/Firebase.config';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/checkout' element={<RequireAuth> <Checkout></Checkout></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Errorpage></Errorpage>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
