import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './../../Component/context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { state } = useContext(AuthContext)
    const [userData, setUserData] = useState({});
    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])
    const route = useNavigate();

    return (
        <div>
            {userData?.name &&
                <div style={{width:'35%',margin:'auto',marginTop:'20px',boxShadow:'1px 0 1px 0 skyblue'}}>
                    <h1>{userData.name}</h1>
                    <h3>{userData.email}</h3>
                    {/* <h4>{userData.role}</h4> */}
                    <div style={{width:'80%',height:'45px',margin:'auto',marginTop:'10px'}}>
                        <button style={{width:'100%',height:'100%',backgroundColor:'skyblue',border:'none',fontSize:'18px',outline:'none',borderRadius:'10px'}} onClick={()=>route('/update_pro')}>Edit Profile</button>
                        </div>
                </div>
            }
        </div>
    )
}

export default Profile