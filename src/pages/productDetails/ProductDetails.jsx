import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import useProdDetails from '../../hooks/useProdDetails';
import Typography from "@mui/material/Typography";
import useAddToCart from "../../hooks/useAddToCart";
import Loader from '../../components/loader/Loader';
import { useTranslation } from "react-i18next";
import { Grid, Tab, Tabs, Chip, Breadcrumbs, Link, Rating, Box, Button, CardMedia, Card, CardContent, Container } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useAddReview from '../../hooks/useAddReview';
import Modal from '../../components/modal/Modal';
import WriteReviewModal from '../../components/writePreviewModal/WritePreviewModal';
import { useForm } from 'react-hook-form';

export default function ProductDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { mutate: addToCart, isPending: AddToCartPending } = useAddToCart();
  const { mutate: addReview, isPending: AddReviewPending } = useAddReview();
  const { data, isError, isLoading, error } = useProdDetails(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (isLoading) return <Loader />
  if (isError) return <Typography color='error'>{error}</Typography>
  return (
    <>
      <Box component={'section'} sx={{ py: 5 }}>
        <Box>
          <Grid container >
            <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 5 }}>
              <Card sx={{ border: '1.5px solid "#3a3c3d78"', borderRadius: '16px' }}>
                <CardMedia component={'img'} image={data.response.image} sx={{ width: '100%', aspectRatio: '4 / 4', objectFit: 'contain', borderRadius: '16px', height: 'auto' }}>
                </CardMedia>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Box >
                <Chip label={t('LIMITED EDITION')} size="larg" sx={{ bgcolor: "primary.main", color: "#1e3a8a", fontWeight: 700, letterSpacing: 0.5, mb: 2 }} />

                <Typography variant="h3" fontWeight={700} gutterBottom>
                  {data.response.name}
                </Typography>

                <Box sx={{ display: 'flex', mb: 3, gap: 1, alignItems: 'center' }}>
                  <Rating value={data.response.rate} precision={0.5} readOnly sx={{ color: "primary.main" }} />
                  <Typography variant="body2" color="text.secondary">
                    ( {data.response.reviews.length} {t('Reviews')})
                  </Typography>
                </Box>

                <Box variant="outlined" sx={{ mb: 3, borderColor: "#94a3b82e", }} >
                  <Box sx={{ gap: 1.5, border: '1.2px solid  #94a3b82e', py: 2 }}>
                    <Typography variant="h4" fontWeight={800} color="primary">
                      {t('Price')}: {data.response.price}$
                    </Typography>

                    <Typography variant="h5" color="text.secondary" > {t('Quantity')}: {data.response.quantity} </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button disabled={AddToCartPending} onClick={() => { addToCart({ productId: data.response.id, count: 1 }) }} fullWidth
                    variant="outlined" size="large" startIcon={<ShoppingCartOutlinedIcon />} sx={{ borderColor: "#94a3b84d", py: 2 }} >{t('Add to Cart')} </Button>

                  <Button fullWidth variant="contained" size="large" sx={{ py: 2, color: '#2563eb' }}> {t('Buy Now')} </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box spacing={1.5} sx={{ display: 'flex', mt: 2 }}>
              {data.response.subImages.map((i) => (
                <Box key={i} sx={{ width: 64, height: 64, borderRadius: 2, bgcolor: "background.paper", border: "1px solid", borderColor: i === 0 ? "primary.main" : "rgba(148,163,184,0.18)", }} />))}
            </Box>

          </Grid>
        </Box>

        <Box sx={{ borderBottom: '1.7px solid #2a272769', my: 5, justifyContent: 'space-evenly' }}>
          <Tabs value={activeTab} onChange={handleTabChange}
            sx={{
              minHeight: '40px', '& .MuiTab-root': {
                textTransform: 'none', fontWeight: 600, fontSize: '16px', color: '#64748b', px: 3, pb: 2, gap: 2,
                minWidth: 'auto', minHeight: '40px', transition: 'color 0.3s', '&.Mui-selected': { color: '#3b82f6', }, '&:hover': { color: '#9fb0ff', },
              },
            }}
          >
            <Tab label={t('Product Description')} />
            <Tab label={t('Customer Reviews')} />
          </Tabs>
        </Box>

        {activeTab === 0 && (
          <Grid container spacing={6} alignItems="center">
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 700, fontSize: '1.4rem', color: '#9fb0ff', mb: 2, letterSpacing: '-0.01em', }} > {t('Built for Endurance')} </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 2.5, fontSize: '14px', }} >
                {data.response.description}
              </Typography>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Box component="img" src={data.response.image} alt=""
                sx={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: '16px', boxShadow: '0px 15px 35px #00000059' }} />
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <Box sx={{ py: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 2 }}>
              <Typography variant="h6" sx={{ color: '#9fb0ff', mb: 3, fontWeight: 700, fontSize: '1.4rem' }}>
                {t('Customer Reviews')}
              </Typography>
              <Button onClick={handleOpen} variant="contained" size="large" >{t('Write a Reviwe')}</Button>
            </Box>

            {data.response.reviews.map((review, index) =>
              <Container maxWidth='md' key={index}>
                <Card key={index} sx={{ mb: 4, py: 2 }}>
                  <CardContent sx={{ p: 3 }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h5" gutterBottom sx={{ color: "primary.main" }}>{review.userName}</Typography>
                      <Rating
                        value={review.rating}
                        precision={0.5}
                        readOnly
                        sx={{ color: "primary.main" }}
                      />
                    </Box>

                    <Typography gutterBottom variant="h6">{review.comment}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '14px', mt: 2 }}>
                      {t('Pasted on')} {review.createdAt}
                    </Typography>
                  </CardContent>
                </Card>
              </Container>
            )}
          </Box>
        )}
      </Box>

      <WriteReviewModal open={open} onClose={handleClose} productId={id} onSubmitReview={addReview} isSubmitting={AddReviewPending} />
    </>
  )
}