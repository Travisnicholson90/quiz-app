import { createContext, useReducer, useEffect } from "react";

// create a context object
export const AuthContext = createContext(); 

// create a reducer function that will be used to update the state of the context
export const authReducer = (state, action) => {
    switch (action.type) { // action.type is either "LOGIN" or "LOGOUT"
        case "LOGIN": // if action.type is "LOGIN"
            return {
                user: action.payload, // action.payload is the user object
            };
        case "LOGOUT": // if action.type is "LOGOUT"
            return {
                user: null, // set the user to null
            };
        default:
            return state; // if action.type is neither "LOGIN" nor "LOGOUT", return the state
    }
}

export const AuthContextProvider = ({ children }) => { 
    // children is the App component
    const [state, dispatch] = useReducer(authReducer, { // useReducer takes in a reducer function and an initial state
        user: null, // initial state
    });
    
    useEffect(() => {
        // get the user from local storage
        const user = JSON.parse(localStorage.getItem('user')); 

        // if the user exists in local storage, update the authContext
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, [])

    console.log('AuthContext state:', state);
    
    return (
        // value is an object that contains the state and the dispatch function that will be used to update the state
        <AuthContext.Provider value={{ ...state, dispatch }}> 
            { children }
        </AuthContext.Provider>
    )
}




