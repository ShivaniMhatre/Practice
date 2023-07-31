import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext();
// const redirect = useNavigate();
const initialState={user:null};


const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return({user:action.payload});
        case "LOGOUT":
            return({user:null});
        default:
            return state;

    }
}

export const AuthProvider=({children})=>{
    
    const[state,dispatch]=useReducer(reducer,initialState);
    // const route=useNavigate();

    function Login(userData){
        dispatch({
            type:'LOGIN',
            payload:userData
        })
    }

    function Logout(){
        localStorage.removeItem('CurrentUser')
        dispatch({
            type:'LOGOUT'
        })
        // redirect('/login')
    }

    useEffect(()=>{
        const userData=JSON.parse(localStorage.getItem('CurrentUser'));
        if(userData){
            dispatch({
                type:"LOGIN",
                payload:userData
            })
        }
    },[])

    return(
        <AuthContext.Provider value={{state,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}
