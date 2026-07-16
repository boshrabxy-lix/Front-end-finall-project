import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Card, CardMedia, Grid, Box, CardContent } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';


export default function Products() {
    const { data, isError, isLoading, error } = useProducts();
    if (isLoading) return <Loader />
    if (isError) return <Typography color='error'>{error}</Typography>


    return (
        <Box className='products' component="section" py={3}>
            <Typography component={'h1'} variant='h2' mb={2}>Products</Typography>
            <Grid container spacing={{xs:2, md:3}} sx={{textAlign:'center'}}>
                {data.response.data.map(product =>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Link to={`/Products/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
                            <Card >
                                <CardMedia component={'img'} image={product.image} sx={{width:200}}></CardMedia>
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
