import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import MainLayout from '../../layouts/MainLayouts';
import Advertising from './Advertising';
import Content from './Content';
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
        <MainLayout>

        <Grid className={classes.sideBar} spacing-md={3} spacing-sm={3}>
            <Welcome />
            <Content/>
        </Grid>
        </MainLayout>
    );
};

export default Home;