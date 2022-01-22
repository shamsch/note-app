//this only creates the context, to use it we run it by a hook call useAuthContext 
import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext()

//this change the global context state based on type 
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {...state, user: action.payload}
        case 'SIGNOUT':
            return {...state, user: null}
        case 'CHANGE_LOG_STATUS':
            return {...state, user: action.payload, check_log_status: true}
        default: 
            return state 
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch]=useReducer(authReducer, {
        user:null,
        check_log_status:false
    })
    useEffect(()=>{
        const unsub = projectAuth.onAuthStateChanged((user)=> {
            dispatch({type: 'CHANGE_LOG_STATUS', payload: user})
        })
    },[])
    console.log("Context state:", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
