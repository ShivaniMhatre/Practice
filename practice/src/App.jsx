import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Signup/Login';
import Register from './Component/Signup/Register';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
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
