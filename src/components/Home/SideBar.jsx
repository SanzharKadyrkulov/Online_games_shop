import { FormControl, FormLabel, Grid, Paper, FormControlLabel, RadioGroup, Radio, makeStyles, Slider, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';

const useStyles = makeStyles(theme => ({
    paper: {
        marginRight: '20px',
        marginBottom: '20px',
        minWidth: '170px',
        maxWidth: '350px'
    }
}))

const SideBar = () => {
    const classes = useStyles()
    const {getProductsData, history} = useProducts()
    const getType = () => {
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }
    const getPrice = () => {
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }
    const [type, setType] = useState(getType())
    const [price, setPrice] = useState(getPrice())


    const handleChangeType = (e) => {
        if(e.target.value === 'all') {
            const search = new URLSearchParams(history.location.search)
            search.delete('type')
            history.push(`${history.location.pathname}?${search.toString()}`)
            getProductsData()
            setType(e.target.value)
            return
        }

        const search = new URLSearchParams(history.location.search)
        search.set('type', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setType(e.target.value)
    }
    const handleChangePrice = (e, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_lte', value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setPrice(value)
    }

    const resetPrice = () => {
        const search = new URLSearchParams(history.location.search)
        search.delete('price_lte')
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setPrice(getPrice())
    }

    return (
        <Grid item md={3}>
            <Paper elevation={2} className={classes.paper}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Brand</FormLabel>
                    <RadioGroup value={type} onChange={handleChangeType}>
                        <FormControlLabel value='Fighter' control={<Radio/>} label="Fighter"/>
                        <FormControlLabel value='Magician' control={<Radio/>} label="Magician"/>
                        <FormControlLabel value='Shooter' control={<Radio/>} label="Shooter"/>
                        <FormControlLabel value='all' control={<Radio/>} label="All"/>
                    </RadioGroup>
                </FormControl>

                <Grid>
                    <Slider value={price} onChange={handleChangePrice} valueLabelDisplay='auto' aria-labelledby='discrette-slider' min={100} max={1000}/>
                    <Button onClick={resetPrice} variant='outlined' color="primary">Reset price</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default SideBar;