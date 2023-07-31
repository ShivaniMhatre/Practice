import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Signup/Login';
import Register from './Component/Signup/Register';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import All_product from './Component/Product/All_product';
import Add_product from './Component/Product/Add_product';
import Single_product from './Component/Product/Single_product';
import Cart from './Component/Cart/Cart';
import Update_profile from './Component/Profile/Update_profile';
import Update_prod from './Component/Product/Update_prod';
import Home from './Component/Navbar/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/update_pro' element={<Update_profile/>}/>
        <Route exact path='/all-product' element={<All_product/>}/>
        <Route exact path='/add-product' element={<Add_product/>}/>
        <Route exact path='/update_prod/:id' element={<Update_prod/>}/>
        <Route exact path='/single_product/:id' element={<Single_product/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
