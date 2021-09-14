import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, AUTH_API_LOGI, AUTH_API_REG } from '../helpers/consts';
import jwt_decode from 'jwt-decode';

const INIT_STATE = {
    user: null,
    loading: false,
    errorMessage: null,
    succes: false
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.AUTH_SUCCES:
            return {
                ...state,
                loading: false,
                errorMessage: null,
                succes: true,
                user: action.payload,
            }
        case ACTIONS.AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ACTIONS.AUTH_ERROR:
            return {
                ...state,
                user: null,
                loading: false,
                errorMessage: action.payload
            }
        case ACTIONS.CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                errorMessage: null,
                succes: false
            }
        case ACTIONS.AUTH_LOGOUT:
            return {
                ...state,
                loading: false,
                errorMessage: null,
                succes: false,
                user: null
            }
        default: return state
    }
}

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const logout = () => {
        localStorage.removeItem('token')
        dispatch({
            type: ACTIONS.AUTH_LOGOUT
        })
    }
    const registerUser = async (newUser) => {
        try {
            dispatch({
                type: ACTIONS.AUTH_LOADING
            })
            const res = await axios.post(AUTH_API_REG, newUser)
            if (res.status >= 200 && res.status <= 299) {
                dispatch({
                    type: ACTIONS.AUTH_SUCCES,
                    payload: null
                })
            } else {
                dispatch({
                    type: ACTIONS.AUTH_ERROR,
                    payload: res.data.message
                })
            }
        } catch (error) {
            dispatch({
                type: ACTIONS.AUTH_ERROR,
                payload: error.response.data.message

            })
        }

    }
    const loginUser = async (user) => {
        try {
            dispatch({ type: ACTIONS.AUTH_LOADING })
            const res = await axios.post(AUTH_API_LOGI, user)
            console.log(res);
            const decoded = jwt_decode(res.data.token)
            const decodedUser = {
                email: decoded.id,
                exp: decoded.exp,
                iat: decoded.iat,
                id: decoded.email
            }
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: ACTIONS.AUTH_SUCCES,
                payload: decodedUser
            })
        } catch (error) {
            dispatch({
                type: ACTIONS.AUTH_ERROR,
                payload: error.response.data.message
            })
        }
    }

    const checkAuth = () => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token)
        if (Date.now() > token.exp * 1000) {
            return;
        }
        dispatch({
            type: ACTIONS.AUTH_SUCCES,
            payload: {
                email: decoded.id,
                exp: decoded.exp,
                iat: decoded.iat,
                id: decoded.email
            }
        })
    }

    const clearState = () => {
        dispatch({ type: ACTIONS.CLEAR_AUTH_STATE })
    }
    const values = {
        registerUser,
        loginUser,
        clearState,
        checkAuth,
        logout,
        user: state.user,
        lodaing: state.loading,
        errorMessage: state.errorMessage,
        succes: state.succes

    }
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;