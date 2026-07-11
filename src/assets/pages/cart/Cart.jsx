import React from 'react'
import useCart from '../../hooks/useCart'
import { Box } from '@mui/material';

export default function Cart() {
  const { data, isError, error, isLoading } = useCart();
  if (isLoading) return <Loader />
  if (isError) return <Typography color='error'>{error}</Typography>
  console.log(data);

  
  return (
    <Box>Cart</Box>
  )
}
