import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box } from '@mui/material';
import product from '../../ui/product/productUi';

export default function ProductsPage() {
    const { data, isLoading, error, isError } = useProducts(100);
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <>
            <Box className="products" py={3}>
                <Box sx={{display:flex , justifyContent:spacing}}>
                    <Typography component={'h2'} variant='h4' mb={2}>Products</Typography>
                    <Link to='/products'>Show All</Link>
                </Box>

                <Grid container spacing={6}>
                    {data.response.data.map(product =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <Product product={product} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}
