import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';
import { Link } from "react-dom"
import Product from '../../ui/product/ProductPageUi';

export default function ProductsPage() {
    const { t } = useTranslation();
    const { data, isLoading, error, isError } = useProducts(100);
    console.log(data);
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
  
    return (
        <>
            <Box className="products" py={3}>
                <Typography component={'h2'} variant='h4' mb={2}> {t('Products')}</Typography>

                <Grid container spacing={6}>
                    {data.response.data.map(product =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                            <Product product={Product} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}
