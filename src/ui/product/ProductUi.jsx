import React from 'react'
import { Rating, Typography, Box } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';
import useProdDetails from '../../hooks/useProdDetails';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';

export default function ProductUi({ product }) {
  return (
    <>
      <Link to={`/Products/${product.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Card sx={{ textAlign: 'center' }}>
          <CardMedia component={'img'} image={product.image} sx={{ width: '100%', height: 'auto' }}></CardMedia>
          <CardContent sx={{ justifyContent: 'center' }}>
            <Typography fontWeight={'600'} component={'h3'} sx={{ textAlign: 'start' }}>{product.name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Typography fontWeight={'600'} component={'h3'}>{product.price}$</Typography>
              <Rating
                size="small"
                value={product.rate}
                precision={0.5}
                readOnly
                sx={{ color: "primary.main" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}