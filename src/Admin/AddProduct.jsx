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
        color: "white"
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    textfield: {
        marginTop: 10,
    }
}))

const AddProduct = () => {
    const classes = useStyles()
    const { addProduct, history } = useProducts()

    const handleClick = async (product) => {
        const data = await addProduct(product)
        history.push('/productlist')
    }
    const [product, setProduct] = useState({
        title: "",
        describtion: '',
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
        <Container style={{ backgroundImage: `url(https://mobimg.b-cdn.net/v3/fetch/74/7494be7f7fccd67d1905a003ebca07a0.jpeg)` }}>
            <Paper style={{ backgroundImage: `url(https://s1.1zoom.me/big0/888/Earth_Moon_547876_1031x1024.jpg)`, backgroundSize: 'no-repeat' }} className={classes.paper} elevation={3}>
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
                            name="describtion"
                            variant="outlined"
                            label='Describtion'
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
                        <TextField
                            name="animation"
                            variant="outlined"
                            label='Animation'
                            onChange={handleInp}
                            className={classes.textfield}
                        />
                        <Button onClick={() => handleClick(product)}>
                            <SaveIcon style={{ color: 'red' }} />
                        </Button>
                        <Button onClick={() => history.push('/productlist')}>
                            <CancelIcon style={{ color: 'red' }} />
                        </Button>
                    </form>
                </Container>
            </Paper>
        </Container>
    );
};

export default AddProduct;