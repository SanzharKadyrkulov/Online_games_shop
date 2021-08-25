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
        marginTop: theme.spacing(55)
    }
}))
const Content = () => {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.mainFeaturesPost}
                style={{ backgroundImage: `url(https://wallpaperaccess.com/full/2293550.jpg)` }}>
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

        </>
    );
};

export default Content;