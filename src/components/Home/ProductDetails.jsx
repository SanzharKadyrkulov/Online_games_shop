import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useParams } from 'react-router-dom';
import { CircularProgress, IconButton } from '@material-ui/core';
import { useProducts } from '../../contexts/ProductContext';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
  },
  //   image: {
  //     width: 200,
  //     height: "100%",
  //   },
  img: {
    margin: 'auto',
    display: 'block',
    maxHeight: '50vh',
  },
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const ProductDetails = () => {
  const { getProductDetails, productDetails, history } = useProducts()
  const { id } = useParams()
  useEffect(() => {
    getProductDetails(id)
  }, [id])

  const classes = useStyles();

  return (
    <>
      {productDetails ?

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={productDetails.animation} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {productDetails.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {productDetails.type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: {productDetails.id}
                    </Typography>

                    <Typography variant="p" >
                      {productDetails.describtion}
                    </Typography>

                  </Grid>
                  <Grid item>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={() => history.push('/')}
                    >
                      <HomeIcon color="primary" />

                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">{productDetails.price}$</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        :
        <CircularProgress />
      }
    </>
  )
}

export default ProductDetails;