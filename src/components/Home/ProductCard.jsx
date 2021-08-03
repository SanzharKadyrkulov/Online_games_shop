import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'


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
    return (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography >
                      {item.describtion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
    );
};

export default ProductCard;