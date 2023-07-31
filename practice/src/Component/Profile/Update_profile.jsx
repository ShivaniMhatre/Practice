import React, { useContext, useEffect, useState } from 'react'
import '../Signup/Register.css'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Update_profile = () => {
    const { Login } = useContext(AuthContext)

    const [userData, setUserData] = useState({});

    const route = useNavigate()


    // console.log(userData, "userData")

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
        if (!currentUser) {
            route("/login")
        }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                    setUserData(allUsers[i])
                }
            }
        }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    function selectrole(event){
        setUserData({ ...userData, ['role']: event.target.value });
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                allUsers[i].role=userData.role;
                currentUser.password = userData.password;
                currentUser.name = userData.name;
            }
        }
        Login(currentUser)
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        toast.success("Profile updated.")
        route('/')
    }
    return (
        <div style={{ margin: '10vh' }}>
            <form onSubmit={handleSubmit}>
                <div id='register'>
                    <h1>Update Profile</h1>
                    <div className='Input'>
                        {/* <h3>{userData.name}</h3> */}
                        <label>Change Name : </label><br />
                        <input type='text' name='name' value={userData.name} onChange={handleChange} /><br />
                    </div>
                    <div className='Input'>
                            <label>Select Your Role :</label><br />
                            <select onChange={selectrole}>
                                <option value='Buyer'>Buyer</option>
                                <option value='Seller'>Seller</option>
                            </select>
                        </div>
                    <div className='Input'>
                        <label>Change Password : </label><br />
                        <input type='password' name='password' onChange={handleChange} /><br />
                    </div>
                    <div id='btn'>
                        <input type='submit' value='Update' />
                    </div>
                    {/* <div id='text' onClick={() => route('/login')}>
                        <span><u>Already have an Account</u></span>
                    </div> */}
                </div>
            </form>
        </div>
    )
}


export default Update_profile