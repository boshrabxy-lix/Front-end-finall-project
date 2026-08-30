import useCart from '../../hooks/useCart'
import { Box, TableHead, TableContainer, TableCell, Table, TableBody, TableRow, TableFooter, IconButton } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import Loader from '../../components/loader/Loader';
import { Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import { useNavigate } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import useClearCart from '../../hooks/useClearCart';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

export default function Cart() {
  const { t } = useTranslation();
  const { data, isError, error, isLoading } = useCart();
  console.log(data);
  const { mutate: removeItem, isPending: removeItemPending } = useRemoveFromCart();
  const { mutate: UpdateItem, isPending: updateItemPending } = useUpdateCartItem();
  const { mutate: clearCart, isPending: ClearPending } = useClearCart();
  const navigate = useNavigate();

  const handleUpdateQty = (productId, action) => {
    const Item = data.items.find((i) =>
      i.productId == productId,
    );
    if (action == '-') {
      UpdateItem({ productId, count: Item.count - 1 });
    } else {
      UpdateItem({ productId, count: Item.count + 1 });
    }
  }

  const handelclearCart = () => {
    if (data.items.length === 0) {
      Swal.fire({
        title: 'Cart is Empty!',
        text: "Cart Is Already Empty!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Close'
      })
      return;
    }
    data.items.forEach((item) => 
      clearCart(item.productId));
  };

  const handleCheckout = () => {
    if (data.items.length === 0) {
      Swal.fire({
        title: 'Cart is Empty!',
        text: "Cart Is Already Empty!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Close'
      })
      return;
    }
    navigate('/checkout');
  };

  if (isLoading) return <Loader />
  if (isError) return <Typography color='error'>{error}</Typography>

  return (
    <Box className="cart" component={'section'} sx={{ py: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography component={'h1'} variant='h2'>{t('My Cart')}</Typography>
        <Button color='error' disabled={ClearPending} onClick={() => handelclearCart(clearCart)}>{t('Clear Cart')}</Button>
      </Box>


      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>{t('Product Name')}</TableCell>
            <TableCell>{t('Price')}</TableCell>
            <TableCell>{t('Quantity')}</TableCell>
            <TableCell>{t('Total')}</TableCell>
            <TableCell>{t('Actions')}</TableCell>
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size='small' disabled={updateItemPending} onClick={() => handleUpdateQty(item.productId, '-')}>
                      <RemoveIcon />
                    </IconButton>

                    <Typography>{item.count}</Typography>

                    <IconButton size='small' disabled={updateItemPending} onClick={() => handleUpdateQty(item.productId, '+')}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>


                <TableCell>
                  {item.count * item.price}$
                </TableCell>
                <TableCell>
                  <Button color='error' variant='contained' disabled={removeItemPending} onClick={() => removeItem(item.productId)}>{t('Remove')}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableCell colSpan={5} sx={{ fontWeight: 800 }}>
             {t('Total')} : {data.cartTotal}$
            </TableCell>
          </TableFooter>
        </Table>
      </TableContainer>


      <Box sx={{ display: 'flex', gap: 3 }}>
        <Button
          variant="contained"
          color="success"
          sx={{ flex: 1 }}
          disabled={updateItemPending || data.items.count === 0}
          onClick={handleCheckout}
        >
          {t('Procces To Checkout')}
        </Button>


        <Button
          variant='contained'
          color='primary'
          sx={{ flex: 1 }}
          disabled={updateItemPending}
          onClick={() => navigate('/')}
        >
          {t('Countinue Shopping')}
        </Button>
      </Box>
    </Box >
  )
}
