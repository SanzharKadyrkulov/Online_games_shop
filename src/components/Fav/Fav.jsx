import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { Grid } from '@material-ui/core';
import ProductCard from '../Home/ProductCard';
import MainLayout from '../../layouts/MainLayouts';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCellImg: {
    width: 50,
  }
});



export default function Cart() {
  const classes = useStyles();
  const { fav, getFav, changeFavCount, history } = useProducts()
  useEffect(() => {
    getFav()
    console.log("this is Item ", fav);
  }, [])


  const handleCountChange = (count, id) => {
    changeFavCount(count, id)
  }

  return (

    <MainLayout>

      <div style={{ backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e716b65-4ab3-4ce2-97ec-306830e18175/d8r0otq-18fc4ef7-656f-4473-a68a-4df96566c75e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlNzE2YjY1LTRhYjMtNGNlMi05N2VjLTMwNjgzMGUxODE3NVwvZDhyMG90cS0xOGZjNGVmNy02NTZmLTQ0NzMtYTY4YS00ZGY5NjU2NmM3NWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SQQ7wZiPsa9uqmOuQXsHX5k2dF8_TIPp_r8xAIaYq1Qz)" }} className={classes.cardGrid} maxWidth="md">
        <Grid style={{ marginTop: '0px', marginBottom: '0px' }} container spacing={4}>
          {fav.products && fav.products.map((product) => (
            <ProductCard key={product.item.id} item={product.item} />
          ))}
        </Grid>

      </div>
    </MainLayout>

  );
}