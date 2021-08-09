import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ACTIONS, JSON_API_PRODUCTS, PRODUCTLIMIT } from '../helpers/consts';
import { calcSubPrice, calcTotalPrice } from '../helpers/functions';

export const productContext = createContext()
export const useProducts = () => {
    return useContext(productContext)
}

const INIT_STATE = {
    productsData: [],
    productDetails: null,
    cart: [],
    pages: 1,
    fav: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return { ...state, productsData: action.payload.data, pages: Math.ceil(action.payload.headers['x-total-count'] / PRODUCTLIMIT) }
        case ACTIONS.GET_PRODUCT_DETAILS:
            return { ...state, productDetails: action.payload }
        case ACTIONS.GET_CART:
            return { ...state, cart: action.payload }
        case ACTIONS.GET_FAV:
            return { ...state, fav: action.payload }
        default: return state
    }
}

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const history = useHistory()

    const getProductsData = async () => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', PRODUCTLIMIT)
        history.push(`${history.location.pathname}?${search.toString()}`)
        const res = await axios.get(`${JSON_API_PRODUCTS}/${window.location.search}`)
        dispatch({
            type: ACTIONS.GET_PRODUCTS,
            payload: res
        })
    }
    const getProductDetails = async (id) => {
        const { data } = await axios.get(`${JSON_API_PRODUCTS}/${id}`)
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
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            localStorage.setItem('cart', JSON.stringify({
                products: [],
                totalPrice: 0
            }))
            cart = {
                product: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: ACTIONS.GET_CART,
            payload: cart
        })
    }
    const getFav = () => {
        let fav = JSON.parse(localStorage.getItem('fav'))
        if (!fav) {
            localStorage.setItem('fav', JSON.stringify({
                products: [],
                totalPrice: 0
            }))
            fav = {
                product: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: ACTIONS.GET_FAV,
            payload: fav
        })
    }
    const addProductToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: +product.price
        }
        let productToFind = cart.products.filter(item => item.item.id === product.id)
        if (productToFind.length === 0) {
            cart.products.push(newProduct)
        } else {
            cart.products = cart.products.filter(item => item.item.id !== product.id)
        }
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: ACTIONS.GET_CART,
            payload: cart
        })
    }
    const favProductToCart = (product) => {
        let fav = JSON.parse(localStorage.getItem("fav"))
        if (!fav) {
            fav = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
        }
        let productToFind = fav.products.filter(item => item.item.id === product.id)
        if (productToFind.length === 0) {
            fav.products.push(newProduct)
        } else {
            fav.products = fav.products.filter(item => item.item.id !== product.id)
        }
        fav.totalPrice = calcTotalPrice(fav.products)
        localStorage.setItem('fav', JSON.stringify(fav))

        dispatch({
            type: ACTIONS.GET_FAV,
            payload: fav
        })
    }
    const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(product => {
            if (product.item.id === id) {
                product.count = count;
                product.subPrice = calcSubPrice(product)
            }
            return product
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: ACTIONS.GET_CART,
            payload: cart
        })

    }
    const changeFavCount = (count, id) => {
        let fav = JSON.parse(localStorage.getItem('fav'))
        fav.products = fav.products.map(product => {
            if (product.item.id === id) {
                product.count = count;
                product.subPrice = calcSubPrice(product)
            }
            return product
        })
        fav.totalPrice = calcTotalPrice(fav.products)
        localStorage.setItem('fav', JSON.stringify(fav))
        dispatch({
            type: ACTIONS.GET_FAV,
            payload: fav
        })

    }
    const values = {
        history,
        productsData: state.productsData,
        productDetails: state.productDetails,
        cart: state.cart,
        fav: state.fav,
        pages: state.pages,
        getProductsData,
        getProductDetails,
        addProduct,
        editProduct,
        deleteProduct,
        getCart,
        getFav,
        addProductToCart,
        changeProductCount,
        favProductToCart,
        changeFavCount,
    }
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;