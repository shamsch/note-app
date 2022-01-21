import { AuthContext, authReducer } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext= () => {
    const context = useContext(AuthContext)

    //this checks if we are using outside the scope of the context 
    if(!context){
        throw Error('outside of scope')
    }

    return context 
} 