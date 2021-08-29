import React, { createContext, useReducer, useEffect } from 'react';
import Axios from "axios";
import {AppReducer} from './AppReducer';

//initial state;
const initialState = {
    users: []
}

// create Context
export const GlobalContext = createContext(initialState);

// provider component;
export const GlobalProvider = (({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
        useEffect(() => {
            Axios.get("http://localhost:3004/read").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });
        }, []);

    //actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })

    }

    const addUser = (user) => {
        console.log(user)
        dispatch({
            type: 'ADD_USER',
            payload: user
        })

        setTimeout(() => {
            Axios.get("http://localhost:3004/read").then((response) => {
                dispatch({type: 'INITIAL_DATA', payload: response.data})
            });  
        },500)
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user,
        })
    }
     
    return(
        <GlobalContext.Provider value={{
            books: state.users,
            removeUser,
            addUser,
            editUser,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}) ;