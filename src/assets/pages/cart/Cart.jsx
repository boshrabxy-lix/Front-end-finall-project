import useCart from '../../hooks/useCart'
import { Box, TableHead, TableContainer, TableCell, Table, TableBody, TableRow, TableFooter, IconButton } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import Loader from '../../components/loader/Loader';
import { Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icon-material/Remove';
import AddIcon from '@mui/icon-material/AddIcon';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { data, isError, error, isLoading } = useCart();
  const { mutate: removeItem, isPending: removeItemPending } = useRemoveFromCart();
  const { mutate: UpdateItem, isPending: updateItemPending } = useUpdateCartItem();
  const navigate=useNavigate();
  console.log(data);

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
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton size='small' disabled={updateItemPending} onClick={()=>handleUpdateQty(item.productId, '-')}>
                          <RemoveIcon />
                        </IconButton>

                        <Typography>{item.count}</Typography>

                        <IconButton size='small' disabled={updateItemPending} onClick={()=>handleUpdateQty(item.productId, '+')}>
                          <AddIcon />
                        </IconButton>
                      </Box>
                </TableCell>


                <TableCell>
                  {item.count * item.price}$
                </TableCell>
                <TableCell>
                  <Button color='error' variant='contained' disabled={removeItemPending} onClick={() => removeItem(item.productId)}>Remove</Button>
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


      <Box sx={{ display: 'flex', gap: 3 }}>
        <Button
          variant='contained'
          color='success'
          sx={{ flex: 1 }}
          disabled={updateItemPending}
          onClick={() => navigate('/checkout')}
        >
          Procces To Checkout
        </Button>
        <Button
          variant='contained'
          color='primary'
          sx={{ flex: 1 }}
          disabled={updateItemPending}
          onClick={() => navigate('/')}
        >
          Countinue Shopping
        </Button>
      </Box>
    </Box >
  )
}
