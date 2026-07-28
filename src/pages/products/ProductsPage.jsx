import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';
import { Link } from "react-dom"
import Product from '../../ui/product/ProductPageUi';
<<<<<<< HEAD
import FilterSlide from '../../components/filterSlide/FilterSlide';
=======
>>>>>>> e5120abd6af2959c29c274aab1e26cc5d1aaa660

export default function ProductsPage() {
    const { t } = useTranslation();
    const { data, isLoading, error, isError } = useProducts(100);
    console.log(data);
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
<<<<<<< HEAD

    return (
        <>

            <FilterSlide />


            <Box className="products" sx={{ py: 5 }}>
                <Typography component={'h2'} variant='h4' sx={{ mb: 3 }}> {t('Products')}</Typography>

                <Grid container spacing={6}>
                    {data.response.data.map(product =>
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                            <Product product={product} />
=======
  
    return (
        <>
            <Box className="products" py={3}>
                <Typography component={'h2'} variant='h4' mb={2}> {t('Products')}</Typography>

                <Grid container spacing={6}>
                    {data.response.data.map(product =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                            <Product product={Product} />
>>>>>>> e5120abd6af2959c29c274aab1e26cc5d1aaa660
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}
