import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useAuth } from '../../contexts/AuthContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const ProductCard = ({item}) => {
    const classes = useStyles()
    const {history, deleteProduct, addProductToCart, cart, getCart} = useProducts()
    const {user} = useAuth()
    const [newCart, setNewCart] = useState(null)
    useEffect(() => {
      getCart()
    },[])
    useEffect(() => {
      setNewCart(cart);
    },[cart])
    console.log(newCart, 'this is cart')
    const checkItemInCart = (id) => {
      console.log('HERE', newCart)
      if(newCart && newCart.products){
        const foundItem = newCart?.products.find((product) => product.item.id===id)
        return foundItem ? 'secondary': 'default'
      } 
    }
    return (
        <Grid  item key={item.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    onClick={() => history.push(`/details/${item.id}`)}
                    className={classes.cardMedia}
                    image={item.image}
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h4" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" >
                      {item.type}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {item.price}$
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => history.push(`/details/${item.id}`)} size="small" color="primary">
                      View
                    </Button>
                    {user && user.email === 'sancho@gmail.com' || user && user.email === 'isakov@gmail.com' ? <><Button onClick={() => history.push(`/editproduct/${item.id}`)} size="small" color="primary">
                      Edit
                    </Button>
                    <IconButton
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              onClick={() => deleteProduct(item.id)}
              color="primary"
            >
              <DeleteIcon />
            </IconButton></>: <></>}
                    
            <IconButton 
                color={checkItemInCart(item.id)}
                aria-label="add to favorites"
                onClick={() => addProductToCart(item)}
                >
                <FavoriteIcon />
                </IconButton>
                  </CardActions>
                </Card>
              </Grid>
    );
};

export default ProductCard;