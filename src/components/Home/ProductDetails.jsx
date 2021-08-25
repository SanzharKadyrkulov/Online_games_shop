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
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    height: "100vh",
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    marginBottom: theme.spacing(0)
  },

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


        <Paper style={{ backgroundImage: `url(${productDetails.animation})` }} className={classes.paper}>
          <Paper style={{ backgroundColor: '#00000000', color: 'white', maxWidth: "300px" }} spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h3">
                    {productDetails.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {productDetails.type}
                  </Typography>
                  <Typography variant="p" >
                    {productDetails.describtion}
                  </Typography>
                  <Typography variant="h4">{productDetails.price}$</Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={() => history.push('/productlist')}
                  >
                    <RestoreIcon style={{ border: '2px solid rgba(52, 52, 52, 0.5)', borderRadius: "50%" }} color="white" />

                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Paper>

        :
        <CircularProgress />
      }
    </>
  )
}

export default ProductDetails;