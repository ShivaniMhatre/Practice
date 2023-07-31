import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './../../../src/Component/Signup/Register.css'
import { toast } from 'react-hot-toast'

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "Buyer" })
    const redirect = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    
    function selectrole(event) {
        setUserData({ ...userData, ['role']: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: userData.role,
                cart: []
            };
            var flag = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].email == userData.email) {
                    flag = true;
                    toast.error("Already Exist!!!!")
                    redirect('/register')
                }
            }
            if (flag == false) {
                // console.log(array, "-array")
                array.push(userDataObj);
                // console.log(array, "array after push")
                localStorage.setItem("Users", JSON.stringify(array));
                toast.success("Registration Successfull...")
                redirect('/login')
            }

            else {
                alert("Fill Your Data....")
            }
        }
    }
        return (
            <div style={{ margin: '10vh' }}>
                <form onSubmit={handleSubmit}>
                    <div id='register'>
                        <h1>Register</h1>
                        <div className='Input'>
                            <label>Name : </label><br />
                            <input type='text' name='name' onChange={handleChange} /><br />
                        </div>
                        <div className='Input'>
                            <label>Select Your Role :</label><br />
                            <select onChange={selectrole}>
                                <option value='Buyer'>Buyer</option>
                                <option value='Seller'>Seller</option>
                            </select>
                        </div>
                        <div className='Input'>
                            <label>Email : </label><br />
                            <input type='email' name='email' onChange={handleChange} /><br />
                        </div>
                        <div className='Input'>
                            <label>Password : </label><br />
                            <input type='password' name='password' onChange={handleChange} /><br />
                        </div>
                        <div id='btn'>
                            <input type='submit' value='Register' />
                        </div>
                        <div id='text' onClick={() => redirect('/login')}>
                            <span><u>Already have an Account</u></span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    export default Register
