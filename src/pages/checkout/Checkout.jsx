import React, { useState } from 'react'
import useCart from '../../hooks/useCart'
import { Box, TableHead, TableContainer, TableCell, Table, TableBody, TableRow, TableFooter } from '@mui/material';
import Loader from '../../components/loader/Loader';
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import useChckout from '../../hooks/useCheckOut';
import { useTranslation } from 'react-i18next';


export default function Checkout() {
    const { t } = useTranslation();
    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const { mutate: checkout, isPending: checkoutPending } = useChckout();
    const { data, isError, error, isLoading } = useCart();
    console.log(data);
    if (isLoading) return <Loader />
    if (isError) return <Typography color='error'>{error}</Typography>

    return (
        <Box className="checkout" component={'section'} sx={{ py: 5 }}>
            <Typography component={'h1'}>{t('Checkout')}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>{t('Product Name')}</TableCell>
                        <TableCell>{t('Price')}</TableCell>
                        <TableCell>{t('Quantity')}</TableCell>
                        <TableCell>{t('Total')}</TableCell>
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
                    <InputLabel id="paymentMethod">{t('Payment Method')}</InputLabel>
                    <Select
                        id="paymentMethod"
                        value={paymentMethod}
                        label={t('paymentMethod')}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <MenuItem value={'Cash'}>{t('Cash')}</MenuItem>
                        <MenuItem value={'Visa'}>{t('Visa')}</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="contained" disabled={checkoutPending} onClick={() => checkout({ paymentMethod })}>
                    {t('Pay Now')}
                </Button>
            </Box>
        </Box >
    )
}
