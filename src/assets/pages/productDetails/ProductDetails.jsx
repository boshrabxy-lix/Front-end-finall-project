import { useParams } from 'react-router-dom'
import useProdDetails from '../../hooks/useProdDetails';
import { Box, CircularProgress, Button ,CardMedia,Card,CardContent} from '@mui/material';
import Typography from "@mui/material/Typography";
import useAddToCart from "../../hooks/useAddToCart";
import DescriptionProduct from '../../components/description/descriptionProduct';

export default function ProductDetails() {
  const { id } = useParams();
  const { mutate: addToCart } = useAddToCart();
  const { data, isError, isLoading, error } = useProdDetails(id);
  console.log(data);

  if (isLoading) return <CircularProgress />
  if (isError) return <Typography color='error'>{error}</Typography>



  return (
    <>
      <Box>
        <DescriptionProduct />

       



        <Button onClick={() => { addToCart({ productId: data.response.id, count: 1 }) }}>Add To Cart</Button>

      </Box>

    </>

  )
}
