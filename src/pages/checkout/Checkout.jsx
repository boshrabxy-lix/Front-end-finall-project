import React, { useState } from 'react'
import useCart from '../../hooks/useCart'
import { Box, TableHead, TableContainer, TableCell, Table, TableBody, TableRow, TableFooter } from '@mui/material';
import Loader from '../../components/loader/Loader';
import Typography from "@mui/material/Typography";
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import {FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material';


export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const { mutate: checkout, isPending: checkoutPending } = useUpdateCartItem();
    const { data, isError, error, isLoading } = useCart();
    console.log(data);
    if (isLoading) return <Loader />
    if (isError) return <Typography color='error'>{error}</Typography>

    return (
        <Box className="checkout" component={'section'} sx={{ py: 5 }}>
            <Typography component={'h1'}>Checkout</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total</TableCell>
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
                                    <Typography>{item.count}</Typography>
                                </TableCell>

                                <TableCell>
                                    {item.count * item.price}$
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


            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                <FormControl fullWidth>
                    <InputLabel id="paymentMethod">Payment Method</InputLabel>
                    <Select
                        labelId="paymentMethod"
                        id="paymentMethod"
                        value={paymentMethod}
                        label="paymentMethod"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <MenuItem value={'Cash'}>Cash</MenuItem>
                        <MenuItem value={'Visa'}>Visa</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="contained"disabled={checkoutPending} onClick={()=>checkout({paymentMethod})}>
                    Pay Now
                </Button>
            </Box>
        </Box >
    )
}
