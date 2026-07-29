import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';
import { Link } from "react-dom"
import Product from '../../ui/product/ProductUi';
import FilterSlide from '../../components/filterSlide/FilterSlide';

export default function ProductsPage() {
    const { t } = useTranslation();
    const { data, isLoading, error, isError } = useProducts(100);
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <>
            <Box className="productsSection" sx={{ py: 5 }}>
                <Typography component={'h2'} variant='h2' sx={{ mb: 3 }}> {t('Products')}</Typography>
                <Grid container spacing={3}>
                    <Grid item size={{ sm: 3 }}>
                        <FilterSlide />
                    </Grid>

                    <Grid item size={{ sm: 9 }}>
                        <Grid container spacing={2}>
                            {data.response.data.map(product =>
                                <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={product.id} >
                                    <Product product={product} />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
