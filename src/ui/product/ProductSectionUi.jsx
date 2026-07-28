import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ProductSectionUi({product}) {
    return (
        <>


        
                <Link to={`/Products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card >
                        <CardMedia component={'img'} image={product.image} sx={{ width: 200 }}></CardMedia>
                        <CardContent>
                            <Typography component={'h3'}>{product.name}</Typography>
                            <Typography component={'span'} variant='body1'> {product.price}$</Typography>
                        </CardContent>
                    </Card>
                </Link>
        </>
    )
}
