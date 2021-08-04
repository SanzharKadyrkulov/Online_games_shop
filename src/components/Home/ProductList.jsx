import { Button, CardActions, CardContent, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { productContext, useProducts } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

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
// const cards = [1, 2, 3]

const ProductList = () => {
  const classes = useStyles()
  const { productsData, getProductsData, history } = useProducts()
  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <main>
      <Paper className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://cdnb.artstation.com/p/assets/images/images/028/965/037/original/arc-noir-00153112.gif?1596045955)`, backgroundSize: "cover", backgroundPosition: "top" }}>
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Mobile Legends:
                </Typography>
                <Typography component="h3" color="inherit" paragraph>
                  Mobile Legends: Bang Bang — игра в жанре multiplayer online battle arena (MOBA), разработанная для мобильных устройств. ... В игре есть карта с изображением таймингов "Баффов" И полоской здоровья на иконке героев. В каждой команде есть пять игроков, каждый из которых управляет персонажем, известным как «герой»
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn More
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Our Heroes!</Typography>

          <div className={classes.mainButtons}>
            <Grid container spacing={4} justify="center">

              <Grid item>
                <Button onClick={() => history.push("/addproduct")} variant="outlined" color="secondary">Add Hero</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {productsData && productsData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default ProductList;