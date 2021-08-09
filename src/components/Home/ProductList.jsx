import { Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import { Pagination } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayouts";

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
    flexDirection: 'column',
    alignItems: 'center'
  }
}))
// const cards = [1, 2, 3]

const ProductList = () => {
  const classes = useStyles()
  const params = useParams()
  const { productsData, getProductsData, pages, history } = useProducts()
  const {user, clearState} = useAuth()
//   useEffect(() => {
//     if(!localStorage.getItem('token')){
//       history.push('/')
//       alert("Login or Signup")
//     }
// },[params])
  const getCurrentPage = () => {
    const search = new URLSearchParams(window.location.search)

    if (!search.get('_page')) {
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

useEffect(() => {
  setPage(getCurrentPage())
}, [params])

  return (
    <MainLayout>

    <main style={{ backgroundImage: `url(https://images.alphacoders.com/529/529250.jpg)`, backgroundSize: "cover", backgroundPosition: "top" }}>
      <div className={classes.mainContent}>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Our Heroes!</Typography>

          <div className={classes.mainButtons}>
            <Grid className={classes.blabla} container spacing={3} justify="center">

              <Grid item>
                {user && user.email === 'sancho@gmail.com' || user && user.email === 'isakov@gmail.com' ? <Button onClick={() => history.push("/addproduct")} variant="outlined" color="secondary">Add Hero</Button> : <></>}
                
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
        <div style={{ marginLeft: '280px' }}>
          <Pagination style={{textColor: "white", margin: '10px auto !important'}} count={pages} color="primary" page={+page} onChange={handlePage} />
        </div>
      </Container>
    </main>
    </MainLayout>
  );
};

export default ProductList;