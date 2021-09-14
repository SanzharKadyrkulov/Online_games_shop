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
        maxWidth: 400,
        padding: theme.spacing(2),
    },
    title: {
        textAlign: "center",
        color: "#dac19d"
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
    },
    input__label: {
        color: "#b39168",
        borderRightColor: '#FFF'
    },
    input: {
        color: "#fdf5bf",
        borderRightColor: '#FFF'
    },
}))

const EditProduct = () => {
    const classes = useStyles()
    const { getProductDetails, productDetails, editProduct, history } = useProducts()
    const { id } = useParams()
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

        <div style={{
            padding: '40px', height: '100vh', backgroundImage: `url(https://img5.goodfon.ru/wallpaper/nbig/7/5c/andrey-vel-kustarev-by-andrey-vel-kustarev-andrey-vel-by-a-1.jpg)`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: '100%'
        }}>
            {product ?
                <Paper style={{ backgroundColor: 'rgba(52, 52, 52, 0)' }} className={classes.paper} elevation={3}>
                    <h1 className={classes.title}>Edit Product</h1>
                    {/* <Container className={classes.container}> */}
                    {/* <img width='370px' src={productDetails ? productDetails.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqFDRbG4yyRvKGbVNNTVYr8kQqj3fvS5WQ&usqp=CAU'} alt="" /> */}
                    <form noValidate autoComplete='off' className={classes.form}>
                        <TextField
                            name="title"
                            variant="outlined"
                            label='Title'
                            fullWidth
                            InputLabelProps={{ className: classes.input__label }}
                            value={product.title}
                            className={classes.textfield}
                            inputProps={{ className: classes.input }}
                            onChange={(e) => handleInp(e, product, setProduct)}
                        />
                        <TextField
                            multiline
                            rows={5}
                            fullWidth
                            name="describtion"
                            variant="outlined"
                            label='Describtion'
                            InputLabelProps={{ className: classes.input__label }}
                            inputProps={{ className: classes.input }}
                            value={product.describtion}
                            onChange={(e) => handleInp(e, product, setProduct)}
                            className={classes.textfield}
                        />
                        <TextField
                            fullWidth
                            name="type"
                            variant="outlined"
                            label='Type'
                            InputLabelProps={{ className: classes.input__label }}
                            inputProps={{ className: classes.input }}
                            value={product.type}
                            onChange={(e) => handleInp(e, product, setProduct)}
                            className={classes.textfield}
                        />
                        <TextField
                            fullWidth
                            name="image"
                            variant="outlined"
                            label='Image'
                            InputLabelProps={{ className: classes.input__label }}
                            inputProps={{ className: classes.input }}
                            value={product.image}
                            onChange={(e) => handleInp(e, product, setProduct)}
                            className={classes.textfield}
                        />
                        <TextField
                            fullWidth
                            name="price"
                            variant="outlined"
                            label='Price'
                            InputLabelProps={{ className: classes.input__label }}
                            inputProps={{ className: classes.input }}
                            value={product.price}
                            onChange={(e) => handleInp(e, product, setProduct)}
                            className={classes.textfield}
                        />
                        <Button
                            onClick={() => handleEdit(productDetails.id, product)}
                        >
                            <SaveIcon style={{ color: '#dac19d' }} />
                        </Button>
                        <Button onClick={() => history.push('/productlist')}>
                            <CancelIcon style={{ color: '#dac19d' }} />
                        </Button>
                    </form>
                    {/* </Container> */}
                </Paper>
                : "loading"
            }
        </div>
    );
};

export default EditProduct;