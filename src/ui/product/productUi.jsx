import React from 'react'
import { Typography } from '@mui/material';
import { Card, CardMedia, CardContent } from '@mui/material';

export default function productUi({product}) {
  return (
    <>
      <Card sx={{ py: 3, textAlign: 'center' }}>
        <CardContent>
          <Typography fontWeight={'600'} component={'h3'}>{product.name}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

