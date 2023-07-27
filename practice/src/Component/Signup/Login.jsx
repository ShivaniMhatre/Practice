import React, { useContext, useState } from 'react'
import './../../../src/Component/Signup/Register.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'


const Login = () => {

  const{state,Login}=useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" })
  const redirect = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.email && userData.password) {
      const users = JSON.parse(localStorage.getItem('Users'));
      var flag = false;
      // let current_user;
      for (var i = 0; i < users.length; i++) {

        if (users[i].email == userData.email && users[i].password == userData.password) {
          // console.log(users[i])
          localStorage.setItem("CurrentUser",JSON.stringify(users[i]))
          Login(users[i])
          // login(users[i]);
          setUserData({ email: '', password: '' })
          toast.success("Login Successfull....");
          
          redirect('/')
          flag = true;
          break;
        }
      }
      if (flag == false) {
        // localStorage.setItem("Current-user", JSON.stringify(current_user))
        toast.error("Please Check Credentials.")

      }
    }
    else {
      toast.error("Fill Your Data!!");
    }
  }
  return (
    <div style={{ margin: '10vh' }}>
      <form onSubmit={handleSubmit}>
        <div id='register'>
          <h1>Login</h1>
          <div className='Input'>
            <label>Email : </label><br />
            <input type='email' name='email' onChange={handleChange} /><br />
          </div>
          <div className='Input'>
            <label>Password : </label><br />
            <input type='password' name='password' onChange={handleChange} /><br />
          </div>
          <div id='btn'>
            <input type='submit' value='Login' />
          </div>
          <div id='text' onClick={() => redirect('/register')}>
            <span><u>New User?</u></span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login