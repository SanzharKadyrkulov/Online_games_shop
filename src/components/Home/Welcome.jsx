import { Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({

  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(0)
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(16.6),
    marginTop: theme.spacing(40)
  }
}))

const Welcome = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.mainFeaturesPost}
      style={{ backgroundImage: `url(https://www.meme-arsenal.com/memes/d4d11cd156701b75e0577a8fad5286ad.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Container fixed>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Button href="/productlist" variant="contained" style={{ backgroundColor: 'white' }}>
                Get started
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Welcome;