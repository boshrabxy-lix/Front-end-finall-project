import React from 'react'
import { Typography, Box, Link, Card, CardMedia, CardContent, Button } from '@mui/material';
import useProdDetails from '../../hooks/useProdDetails';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useAddToCart from '../../hooks/useAddToCart';
import { useTranslation } from 'react-i18next';


export default function ProductProfileUi({ product }) {
    const { t } = useTranslation();
  const { mutate: addToCart, isPending: AddToCartPending } = useAddToCart();
  return (
    <>
      <Link component={RouterLink} to={`/Products/${product.id}`} underline="none" sx={{ color: 'inherit' }}>
        <Card sx={{ textAlign: 'center' }}>
          <CardMedia component={'img'} image={product.image} sx={{ width: '100%', height: 'auto' }}></CardMedia>
          <CardContent sx={{ justifyContent: 'center' }}>
            <Typography fontWeight={'600'} component={'h3'} sx={{ textAlign: 'start' }}>{product.name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography fontWeight={'600'} component={'h3'}>{product.price}$</Typography>
            </Box>
          </CardContent>
          <Button
            fullWidth
            disabled={AddToCartPending}
            onClick={() => { addToCart({ productId: data.response.id, count: 1 }) }}
            variant="contained"
            size="large"
            startIcon={<ShoppingCartOutlinedIcon />}
            sx={{ borderColor: "#94a3b84d", display: 'flex', flexGrow: 1 }}
          >
            {t('Add to Cart')}
          </Button>
        </Card>
      </Link>
    </>
  )
}