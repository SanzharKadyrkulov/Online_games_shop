import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { useProducts } from '../../contexts/ProductContext';
import DeleteIcon from '@material-ui/icons/Delete';


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
  const { history, deleteProduct } = useProducts()
  return (
    <Grid onClick={() => history.push(`/details/${item.id}`)} item key={item.id} xs={12} sm={6} md={4}>
      <Card style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgkJa5E5VqVNgN3nl5R8gKvmw-y7QKYShLw&usqp=CAU)`, backgroundSize: "cover", backgroundPosition: "top" }}
        className={classes.card}>
        <CardMedia
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
          <Button onClick={() => history.push(`/editproduct/${item.id}`)} size="small" color="primary">
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
          </IconButton>
          <PlayCircleFilledIcon color='primary' />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;