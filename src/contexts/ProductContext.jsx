import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ACTIONS, JSON_API_PRODUCTS } from '../helpers/consts';

export const productContext = createContext()
export const useProducts = () => {
    return useContext(productContext)
}

const INIT_STATE = {
    productsData: [],
    productDetails: {},

}

const reducer = (state=INIT_STATE, action) => {
    switch (action.type){
        case ACTIONS.GET_PRODUCTS:
            return {...state, productsData: action.payload}
        case ACTIONS.GET_PRODUCT_DETAILS:
            return {...state, productDetails: action.payload}
        default: return state
    }
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const history = useHistory()

    const getProductsData = async () => {
        const {data} = await axios.get(`${JSON_API_PRODUCTS}`)
        dispatch({
            type: ACTIONS.GET_PRODUCTS,
            payload: data
        })
    }
    const addProduct = async (product) => {
        const data = await axios.post(JSON_API_PRODUCTS, product)
        getProductsData()
    }
    const values = {
        history,
        productsData: state.productsData,
        getProductsData,
        addProduct,

    }
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;