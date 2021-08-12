import { Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useProducts } from "../contexts/ProductContext";



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
        marginTop: theme.spacing(66)
    }
}))

const Advertising = () => {
    const classes = useStyles()
    const {history} = useProducts()
    setTimeout(() => {
        history.push('/productlist')
    }, 2000);
    return (
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://marketplace.canva.com/EAEgPdD7hWM/1/0/1600w/canva-abstract-thank-you-card-Lb3dqYctuh8.jpg)`, backgroundPosition: 'center', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Advertising;