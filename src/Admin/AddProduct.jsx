import { Button, Container, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useProducts } from '../contexts/ProductContext';

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

const AddProduct = () => {
    const classes = useStyles()
    const {addProduct, history} = useProducts()

    const handleClick = async (product) => {
        const data = await addProduct(product)
        history.push('/')
    }
    const [product, setProduct] = useState({
        title: "",
        description: '',
        image: '',
        type: '',
        price: 0,
    })

    const handleInp = (e) => {
        let obj = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)

    }

    return (
        <Paper className = {classes.paper} elevation={3}>
            <h1 className={classes.title}>Add Product</h1>
            <Container className={classes.container}>
                {/* <img width='370px' src={product.image ? product.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqFDRbG4yyRvKGbVNNTVYr8kQqj3fvS5WQ&usqp=CAU'} alt="" /> */}
                <form noValidate autoComplete='off' className={classes.form}>
                <TextField 
                name="title"
                variant="outlined"
                label='Title'
                className={classes.textfield}
                onChange={handleInp}
                />
                <TextField 
                name="description"
                variant="outlined"
                label='Description'
                onChange={handleInp}
                className={classes.textfield}
                />
                <TextField 
                name="type"
                variant="outlined"
                label='Type'
                onChange={handleInp}
                className={classes.textfield}
                />
                <TextField 
                name="image"
                variant="outlined"
                label='Image'
                onChange={handleInp}
                className={classes.textfield}
                />
                <TextField 
                name="price"
                variant="outlined"
                label='Price'
                onChange={handleInp}
                className={classes.textfield}
                />
                <Button onClick ={() => handleClick(product)}>
                    <SaveIcon/>
                </Button>
                <Button onClick ={() => history.push('/')}>
                    <CancelIcon/>
                </Button>
                </form>
            </Container>
        </Paper>
    );
};

export default AddProduct;