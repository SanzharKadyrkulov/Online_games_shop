import { Grid } from '@material-ui/core';
import React from 'react';
import ProductList from './ProductList';

const Home = () => {
    return (
        <Grid container spacing-md={3} spacing-sm={3}>
            <ProductList />
        </Grid>
    );
};

export default Home;