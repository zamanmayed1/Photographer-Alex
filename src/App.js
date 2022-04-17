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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/checkout'element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup'element={<Signup></Signup>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
