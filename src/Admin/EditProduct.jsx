import React, { useEffect } from 'react';
import { Button, Container, makeStyles, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import { handleInp } from '../helpers/functions';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 800
    },
    title: {
        textAlign: "center",
        color: "grey"
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        color: 'black'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    textfield: {
        marginTop: 10
    }
}))

const EditProduct = () => {
    const classes = useStyles()
    const {getProductDetails, productDetails,editProduct, history} = useProducts()
    const {id} = useParams()
    useEffect(() => {
        getProductDetails(id)
    }, [id])


    const handleEdit = async (id, product) => {
        const data = await editProduct(id, product)
        history.push('/productlist')
    }
    const [product, setProduct] = useState(productDetails)
    useEffect(() => {
        setProduct(productDetails)
    }, [productDetails])
    
    return (
        <>
        {productDetails ?
        <Paper className = {classes.paper} elevation={3}>
            <h1 className={classes.title}>Edit Product</h1>
            <Container className={classes.container}>
                <img width='370px' src={productDetails ? productDetails.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqFDRbG4yyRvKGbVNNTVYr8kQqj3fvS5WQ&usqp=CAU'} alt="" />
                <form noValidate autoComplete='off' className={classes.form}>
                <TextField 
                name="title"
                variant="outlined"
                label='Title'
                value={product.title}
                className={classes.textfield}
                onChange={(e) => handleInp(e,product, setProduct)}
                />
                <TextField 
                name="describtion"
                variant="outlined"
                label='Describtion'
                value={product.describtion}
                onChange={(e) => handleInp(e,product, setProduct)}
                className={classes.textfield}
                />
                <TextField 
                name="type"
                variant="outlined"
                label='Type'
                value={product.type}
                onChange={(e) => handleInp(e,product, setProduct)}
                className={classes.textfield}
                />
                <TextField 
                name="image"
                variant="outlined"
                label='Image'
                value={product.image}
                onChange={(e) => handleInp(e,product, setProduct)}
                className={classes.textfield}
                />
                <TextField 
                name="price"
                variant="outlined"
                label='Price'
                value={product.price}
                onChange={(e) => handleInp(e,product, setProduct)}
                className={classes.textfield}
                />
                <Button 
                onClick ={() => handleEdit(productDetails.id, product)}
                >
                    <SaveIcon/>
                </Button>
                <Button onClick ={() => history.push('/productlist')}>
                    <CancelIcon/>
                </Button>
                </form>
            </Container>
        </Paper>
        : "loading"
        }   
        </>
    );
};

export default EditProduct;