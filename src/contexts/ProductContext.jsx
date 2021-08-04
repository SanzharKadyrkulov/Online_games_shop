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
        const search = new URLSearchParams(history.location.search)
        history.push(`${history.location.pathname}?${search.toString()}`)
        const {data} = await axios.get(`${JSON_API_PRODUCTS}/${window.location.search}`)
        dispatch({
            type: ACTIONS.GET_PRODUCTS,
            payload: data
        })
    }
    const getProductDetails = async (id) => {
        const {data} = await axios.get(`${JSON_API_PRODUCTS}/${id}`)
        dispatch({
            type: ACTIONS.GET_PRODUCT_DETAILS,
            payload: data
        })
    }
    const addProduct = async (product) => {
        const data = await axios.post(JSON_API_PRODUCTS, product)
        getProductsData()
    }
    const editProduct = async (id, product) => {
        const data = await axios.patch(`${JSON_API_PRODUCTS}/${id}`, product)
        getProductsData()
    }
    const deleteProduct = async (id) => {
        const data = await axios.delete(`${JSON_API_PRODUCTS}/${id}`)
        getProductsData()
    }
    const values = {
        history,
        productsData: state.productsData,
        productDetails: state.productDetails,
        getProductsData,
        getProductDetails,
        addProduct,
        editProduct,
        deleteProduct,

    }
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;