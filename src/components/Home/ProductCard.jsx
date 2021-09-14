import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useAuth } from '../../contexts/AuthContext';
import CommentIcon from '@material-ui/icons/Comment';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';



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

const ProductCard = ({ item }) => {
  const classes = useStyles()
  const { history, deleteProduct, addProductToCart, cart, getCart, favProductToCart, fav, getFav, editProduct } = useProducts()
  const { user } = useAuth()
  const [newCart, setNewCart] = useState(null)
  const [newFav, setNewFav] = useState(null)
  useEffect(() => {

    getCart()
  }, [])
  useEffect(() => {
    setNewCart(cart);
  }, [cart])
  useEffect(() => {
    console.log("this is productCard item ", item.likes);
    getFav()
  }, [])
  useEffect(() => {

    setNewFav(fav);
  }, [fav])

  const [likes, setLikes] = useState(item.likes.length)
  // console.log(newCart, 'this is cart')
  const checkItemInCart = (id) => {
    // console.log('HERE', newCart)
    if (newCart && newCart.products) {
      const foundItem = newCart?.products.find((product) => product.item.id === id)
      return foundItem ? 'secondary' : 'default'
    }
  }
  const checkItemInFav = (id) => {
    // console.log('HERE', newFav)
    if (newFav && newFav.products) {
      const foundItem = newFav?.products.find((product) => product.item.id === id)
      return foundItem ? 'secondary' : 'default'
    }
  }
  const handleLikes = async (id, productos) => {
    if (productos.likes.includes(user.email)) {
      let newLikes = [...productos.likes]
      let superNewLikes = [...newLikes]
      newLikes.forEach((email, index) => {
        if (email === user.email) {
          superNewLikes.splice(index, 1)
        }
      })
      let productWithoutLike = {
        ...productos,
        likes: superNewLikes
      }
      const data = await editProduct(id, productWithoutLike)
      setLikes(superNewLikes.length)
      return
    }

    let newLike = [...productos.likes]
    newLike.push(user.email)
    let productWithLike = {
      ...productos,
      likes: newLike
    }
    const data = await editProduct(id, productWithLike)
    setLikes(newLike.length)
  }
  const isLiked = (productos) => {
    if (productos.likes.includes(user.email)) {
      return 'secondary'
    }
    return 'default'
  }

  return (
    <Grid style={{ backgroundColor: `trasparent` }} item key={item.id} xs={12} sm={6} md={4}>
      <Card style={{ backgroundColor: `rgba(85, 130, 159, 0.4)` }} className={classes.card}>
        <CardMedia
          onClick={() => history.push(`/details/${item.id}`)}
          className={classes.cardMedia}
          image={item.image}
          title="Image Title"
        />
        <CardContent style={{ backgroundColor: `trasparent`, backgroundSize: "cover", backgroundPosition: "top" }} className={classes.cardContent}>
          <Typography style={{ color: '#cffbfb' }} variant="h4" gutterBottom>
            {item.title}
          </Typography>
          <Typography style={{ color: '#8fd0ca' }} variant="h5" >
            {item.type}
          </Typography>
          <Typography style={{ color: '#e7fbfc' }} variant="h6" gutterBottom>
            {item.price}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => history.push(`/details/${item.id}`)} size="small" >
            View
          </Button>
          {user && user.email === 'isakov@gmail.com' ? <><Button onClick={() => history.push(`/editproduct/${item.id}`)} size="small" >
            Edit
          </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"

              aria-haspopup="true"
              onClick={() => deleteProduct(item.id)}
            >
              <DeleteIcon />
            </IconButton></> : <></>}

          <IconButton
            color={checkItemInCart(item.id)}
            aria-label="add to shopping"
            onClick={() => addProductToCart(item)}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <BookmarkBorderIcon
            color={checkItemInFav(item.id)}
            aria-label="add to shopping"
            onClick={() => favProductToCart(item)}
          />
          <h5>{likes}</h5>
          <FavoriteBorderIcon
            color={isLiked(item)}
            aria-label="add to shopping"
            onClick={() => handleLikes(item.id, item)}
          />
        </CardActions>
        <IconButton
          color={checkItemInCart(item.id)}
          aria-label="add to shopping"
          color='warning'
          onClick={() => history.push(`/comments/${item.id}`)}
        // onClick={() => addProductToCart(item)}
        >
          <CommentIcon />
        </IconButton>
      </Card>
    </Grid>
  );
};

export default ProductCard;