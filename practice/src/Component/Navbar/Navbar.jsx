import React, { useContext, useEffect, useState } from 'react'
import './../../../src/Component/Navbar/Navbar.css'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [userData, setUserData] = useState();
    const { state, Logout } = useContext(AuthContext);
    const redirect = useNavigate();
    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])

    function logout() {
        Logout();
        redirect('/')
    }
    return (
        <div id='nav'>
            <div id='first_div' onClick={() => redirect('/')}>
                <h1 style={{ color: "Red" }}>L</h1>
                <h1 style={{ color: "blue" }}>O</h1>
                <h1 style={{ color: "Green" }}>G</h1>
                <h1 style={{ color: "yellow" }}>O</h1>
            </div>
            <div id='sec_div'>
                <div onClick={() => redirect('/all-product')}>All Products</div>
                {userData?.role == "Seller" && <div onClick={() => redirect('/add-product')}>ADD Product</div>}
                {userData?.name &&
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <div style={{display:'flex',alignItems:'center',width:'10%',justifyContent:'space-around'}} onClick={()=>redirect('/profile')}>
                        <i class="fa-regular fa-user"></i>
                        <h3>{userData.name}</h3>
                        </div>
                    </div>
                }
                {userData?.role=="Buyer" && <h3 onClick={()=>redirect('/cart')} style={{padding:'10px',marginLeft:'10px'}}>cart</h3>}
                {userData?.name ?
                    // <div onClick={Logout}>Logout</div>
                    <i class="fa-solid fa-arrow-right-from-bracket" onClick={logout} ></i>
                    :
                    <i class="fa-solid fa-arrow-right-to-bracket" onClick={()=>redirect('/login')}></i>
                    // <h3 onClick={logout}>logout</h3>
                    // :
                    // <h3 onClick={() => redirect('/login')}>login</h3>
                }
            </div>
        </div>
    )
}

export default Navbar