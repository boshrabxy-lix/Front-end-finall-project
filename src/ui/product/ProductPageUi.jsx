import React from 'react'
<<<<<<< HEAD
import { Rating, Typography ,Box } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';

export default function ProductPageUi({ product }) {
  return (
    <>
      <Card sx={{ textAlign: 'center'}}>
        <CardMedia component={'img'} image={product.image} sx={{width: '100%', height: 'auto'}}></CardMedia>
        <CardContent sx={{ justifyContent: 'center'}}>
          <Typography fontWeight={'600'} component={'h3'} sx={{textAlign: 'start'}}>{product.name}</Typography>
          <Box sx={{display:'flex', alignItems:'center', gap:3}}>
            <Typography fontWeight={'600'} component={'h3'}>{product.price}$</Typography>
            <Rating
              size="small"
              value={product.rate}
              precision={0.5}
              readOnly
              sx={{ color: "primary.main" }}
            />
          </Box>
=======
import { Typography } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';

export default function ProductPageUi({product}) {
  return (
    <>
      <Card sx={{ py: 3, textAlign: 'center' }}>
        <CardContent>
          <Typography fontWeight={'600'} component={'h3'}>{product.name}</Typography>
>>>>>>> e5120abd6af2959c29c274aab1e26cc5d1aaa660
        </CardContent>
      </Card>
    </>
  )
}

