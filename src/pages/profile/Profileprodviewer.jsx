import React from 'react'
import useProducts from '../../hooks/useProducts'
import Loader from '../../components/loader/Loader';
import { Box, Grid, Typography } from '@mui/material';
import Product from '../../ui/product/ProductProfileUi';
import getTheme from "../../Theme";

export default function Profileprodviewer() {
    const { data, isError, isLoading, error } = useProducts(2);

    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box sx={{py:3}}>
            <Typography component={'h2'} variant='h4' gutterBottom sx={{ color: "primary", fontSize: 38, fontWeight: 700, mt: 3 }}>Picked For You</Typography>
            <Grid container spacing={1}>
                {data.response.data.map(product =>
                    <Grid item size={{ xs: 12, sm: 4 }} key={product.id} >
                        <Product product={product} />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}
