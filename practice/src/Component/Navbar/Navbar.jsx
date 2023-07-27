import React, { useContext, useEffect, useState } from 'react'
import './../../../src/Component/Navbar/Navbar.css'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    const [userData, setUserData] = useState();
    const {state, Logout} = useContext(AuthContext);
    const redirect=useNavigate();
    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])

    return (
        <div id='nav'>
            <div id='first_div'>
                <h1 style={{ color: "Red" }}>L</h1>
                <h1 style={{ color: "blue" }}>O</h1>
                <h1 style={{ color: "Green" }}>G</h1>
                <h1 style={{ color: "yellow" }}>O</h1>
            </div>
            <div id='sec_div'>
                <div>All Products</div>
                {userData?.role == 'Seller' && <div>ADD Product</div>}
                {userData?.name &&
                    <div style={{display:'flex',alignItems:'center',width:'10%',justifyContent:'space-around'}}>
                        <i class="fa-regular fa-user"></i>
                        <h3>{userData.name}</h3>
                    </div>
                    }
                {userData?.name ?
                    // <div onClick={Logout}>Logout</div>
                    <i class="fa-solid fa-arrow-right-from-bracket" onClick={Logout}></i>
                    :
                    <i class="fa-solid fa-arrow-right-to-bracket" onClick={()=>redirect('/login')}></i>
                    }
            </div>
        </div>
    )
}

export default Navbar