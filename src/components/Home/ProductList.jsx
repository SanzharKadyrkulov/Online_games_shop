import { Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import { Pagination } from "@material-ui/lab";

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
  },
  blabla: {
    flexDirection:'column',
    alignItems: 'center'
  }
}))
// const cards = [1, 2, 3]

const ProductList = () => {
  const classes = useStyles()
  const { productsData, getProductsData, pages, history } = useProducts()
  const getCurrentPage = () => {
    const search = new URLSearchParams(window.location.search)

    if(!search.get('_page')){
        return 1
    }
    return search.get('_page')
}
const [page, setPage] = useState(getCurrentPage())
  useEffect(() => {
    getProductsData()
  }, [])

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search)
    search.set('_page', page)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProductsData()
    setPage(page)
}

  return (
    <main style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9MkfPdzoZhI_XaywgENkathPU73TZM3O5A&usqp=CAU)`, backgroundSize: "cover", backgroundPosition: "top" }}>
      <div className={classes.mainContent}>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Our Heroes!</Typography>

          <div className={classes.mainButtons}>
            <Grid className={classes.blabla} container spacing={3} justify="center">

              <Grid item>
                <Button onClick={() => history.push("/addproduct")} variant="outlined" color="secondary">Add Hero</Button>
              </Grid>
          <SideBar />
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
        <div style={{marginLeft: '350px',marginTop:'20px'}}>
            <Pagination count={pages} color="primary" page={+page} onChange={handlePage} />
        </div>
      </Container>
    </main>
  );
};

export default ProductList;