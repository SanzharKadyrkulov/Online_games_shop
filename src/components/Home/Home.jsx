import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Advertising from './Advertising';
import Welcome from './Welcome';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
    },
    sideBar: {
        flexWrap: 'nowrap'
    }
}))
const Home = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.sideBar} spacing-md={3} spacing-sm={3}>
            <Welcome />
            <Advertising />
        </Grid>
    );
};

export default Home;