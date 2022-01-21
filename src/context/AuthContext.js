//this only creates the context, to use it we run it by a hook call useAuthContext 
import { createContext, useReducer } from "react";

export const AuthContext = createContext()

//this change the global context state based on type 
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {...state, user: action.payload}
        default: 
            return state 
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch]=useReducer(authReducer, {
        user:null
    })
    console.log("Context state:", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
