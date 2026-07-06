import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Card, CardMedia, Grid, Box, CircularProgress, CardContent } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';


export default function Products() {
    const { data, isError, isLoading, error } = useProducts();
    if (isLoading) return <CircularProgress />
    if (isError) return <Typography color='error'>{error}</Typography>


    return (
        <Box className='products' component="section" py={3}>
            <Typography component={'h1'} variant='h2' mb={2}>Products</Typography>
            <Grid container spacing={4}>
                {data.response.data.map(product =>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <Link >
                            <Card>
                                <CardMedia component={'img'} image={product.image}></CardMedia>
                                <CardContent>
                                    <Typography component={'h3'}>{product.name}</Typography>
                                    <Typography component={'span'} variant='body1'> {product.price}$</Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}
