import { FormControl, FormLabel, Grid, Paper, FormControlLabel, RadioGroup, Radio, makeStyles, Slider, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';

const useStyles = makeStyles(theme => ({
    paper: {
        minWidth: '170px',
        maxWidth: '350px',
        padding: theme.spacing(2)
    },
    container: {
        padding: theme.spacing(2)
    },
    root: {
        background: 'linear-gradient(45deg, #58a9a7 30%, #58a9a7 90%)',
        borderRadius: 3,
        border: 0,
        color: '#e5ecf4',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(126, 190, 202, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
}))

const SideBar = () => {
    const classes = useStyles()
    const { getProductsData, history } = useProducts()
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
        // if (e.target.value === 'all') {
        //     const search = new URLSearchParams(history.location.search)
        //     search.delete('type')
        //     history.push(`${history.location.pathname}?${search.toString()}`)
        //     getProductsData()
        //     setType(e.target.value)
        //     return
        // }

        const search = new URLSearchParams(history.location.search)
        search.set('type', e.target.value)
        search.set('_page', 1)
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
        search.delete('type')
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProductsData()
        setPrice(getPrice())
    }

    return (
        <Grid container md={3}>
            <Paper style={{ backgroundSize: "cover", backgroundPosition: "top", backgroundColor: 'transparent' }}
                elevation={2} className={classes.paper}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Type</FormLabel>
                    <RadioGroup value={type} onChange={handleChangeType} style={{ color: 'white' }}>
                        <FormControlLabel value='Боец' control={<Radio />} label="Боец" />
                        <FormControlLabel value='Маг' control={<Radio />} label="Маг" />
                    </RadioGroup>
                </FormControl>

                <Grid>
                    <Slider color="primary" value={price} onChange={handleChangePrice} valueLabelDisplay='auto' aria-labelledby='discrette-slider' min={14000} max={32000} />
                    <Button classes={{
                        root: classes.root, // class name, e.g. `classes-nesting-root-x`
                        label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    }} onClick={resetPrice} variant='contained' >Reset</Button>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default SideBar;