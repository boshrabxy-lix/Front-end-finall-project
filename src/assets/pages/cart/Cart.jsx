import React from 'react'
import useCart from '../../hooks/useCart'
import { Box } from '@mui/material';

export default function Cart() {
  const { data, isError, error, isLoading } = useCart();



  if (isLoading) return <Loader />
  if (isError) return <Typography color='error'>{error}</Typography>

  return (
    <Box className="cart" component={'section'} sx={{ py: 5 }}>
      <Typography component={'h1'}>My Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableHead>

          <TableBody>
            {data.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.productName}
                </TableCell>
                <TableCell>
                  {item.price}$
                </TableCell>
                <TableCell>
                  {item.count}
                </TableCell>
                <TableCell>
                  {item.count * item.price}$
                </TableCell>
                <TableCell>
                  <Button color='error' variant='contained'>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableCell colSpan={5} sx={{ fontWeight: 800 }}>
              Total : {data.cartTotal}$
            </TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}
