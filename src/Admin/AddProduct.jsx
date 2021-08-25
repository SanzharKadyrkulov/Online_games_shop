import { Button, Container, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { useProducts } from '../contexts/ProductContext';
import { green } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: green[500],
        },
    },
}); const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '0px auto',
        maxWidth: 400
    },
    title: {
        textAlign: "center",
        color: "#010101"
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    textfield: {
        marginTop: 10,
        color: 'green !important',
        border: '1px solid grey',
        borderRadius: theme.shape.borderRadius
        // color:'secondary'
    },
    input: {
        color: "#000c1c",
        borderRightColor: '#FFF'
    },
    input__label: {
        color: "#1f344a",
        borderRightColor: '#FFF'
    },
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
        likes: []
    })

    const handleInp = (e) => {
        let obj = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)

    }

    return (
        <div style={{
            padding: '60px', backgroundImage: `url(https://cdn.wallpapersafari.com/75/54/nIW8Qe.jpg)`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: '100%'
        }}>
            <Paper style={{ backgroundColor: 'rgba(52, 52, 52, 0)' }} className={classes.paper} elevation={3}>
                <h1 className={classes.title}>Add Product</h1>
                {/* <Container className={classes.container}> */}
                {/* <img width='370px' src={product.image ? product.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqFDRbG4yyRvKGbVNNTVYr8kQqj3fvS5WQ&usqp=CAU'} alt="" /> */}
                <form noValidate autoComplete='off' className={classes.form}>

                    <TextField
                        fullWidth
                        name="title"
                        variant="outlined"
                        label='Title'
                        InputLabelProps={{ className: classes.input__label }}
                        className={classes.textfield}
                        onChange={handleInp}
                        inputProps={{ className: classes.input }}
                        // error={true}
                        color='secondary'
                    />
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        name="describtion"
                        variant="outlined"
                        label='Describtion'
                        InputLabelProps={{ className: classes.input__label }}
                        onChange={handleInp}
                        className={classes.textfield}
                        inputProps={{ className: classes.input }}
                        color='secondary'
                    />
                    <TextField
                        name="type"
                        fullWidth
                        variant="outlined"
                        label='Type'
                        InputLabelProps={{ className: classes.input__label }}
                        onChange={handleInp}
                        className={classes.textfield}
                        inputProps={{ className: classes.input }}
                        color='secondary'
                    />
                    <TextField
                        name="image"
                        fullWidth
                        variant="outlined"
                        label='Image'
                        InputLabelProps={{ className: classes.input__label }}
                        onChange={handleInp}
                        className={classes.textfield}
                        inputProps={{ className: classes.input }}
                        color='secondary'
                    />
                    <TextField
                        name="price"
                        fullWidth
                        variant="outlined"
                        label='Price'
                        InputLabelProps={{ className: classes.input__label }}
                        onChange={handleInp}
                        className={classes.textfield}
                        inputProps={{ className: classes.input }}
                        color='secondary'
                    />
                    <TextField
                        fullWidth
                        name="animation"
                        variant="outlined"
                        label='Animation'
                        InputLabelProps={{ className: classes.input__label }}
                        onChange={handleInp}
                        className={classes.textfield}
                        inputProps={{ className: classes.input }}
                        color='secondary'
                    />
                    <Button onClick={() => handleClick(product)}>
                        <SaveIcon style={{ color: '#010101' }} />
                    </Button>
                    <Button onClick={() => history.push('/productlist')}>
                        <CancelIcon style={{ color: '#010101' }} />
                    </Button>
                </form>
                {/* </Container> */}
            </Paper>
        </div>
    );
};

export default AddProduct;