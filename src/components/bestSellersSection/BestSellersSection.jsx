import React, { useState } from 'react';
import { Box, Typography, Button, ButtonGroup, Grid, Card, CardMedia, CardContent, Chip, Rating, IconButton, Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTranslation } from 'react-i18next';

export default function BestSellersSection() {
    const { t } = useTranslation();
    const [tab, setTab] = useState('all');

    const products = [
        {
            id: 1, category: t('AUDIO'), title: t('Pro Wireless Headphones'), rating: 4.5, reviews: 126, price: 249.00,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUfwHVIgb8VecYcsPm49b2qe8gamkvz8GbdhHUV9xg3DkvN9hYsTxAwXZ_s9_ZBkK2VIzly4VkaKDsaIwsH6pdagnzez40eIjAzfyozL8KSd6B1CJwv39Bg8piSobksXSKbQUx94XzP1mRicOPEybIOo07baj8zOQ7P65f0XWNMekyDpeAcT43K7DYR2obYvQD9YH4myYMIyp75aUrmCaXpkDW_IjCHQz1QlVL1clgzQXW5pqgdkg9g6hsyiqE0gJth5Tuyo3rC20",
        },
        {
            id: 2, category: t('WEARABLES'), title: t('Active Smart Watch'), rating: 4.8, reviews: 254, price: 189.00,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIvuXBurnZmwBxVtbHQ72BNQ7cicfbITVo34Ao49zwAw5ZdlJH7UgBb1atstvQo9tT0mNnMECIPnJZ7Wh0v0yiI52VhPK5le4n7LnbdHD77qQCFtSna8QtMm0KU9Emy47acSvJ4NFW3qWuMgnBq3vG1nkt_wg0KzznhyvnU5OHieaywLW5Z_UqrsIh-bn811sdV3COZUGwJbvy5Gds6x7TdANKXJUF2zxfjYeRiecBSgvVkFKgrrMDk8UZmmss7etY5v_pajg-rkE",
        },
        {
            id: 3, category: t('HOME TECH'), title: t('CloudMesh Wi-Fi 6 Router'), rating: 4.2, reviews: 89, price: 129.00,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQJAeE9pmqYA9r3STNMtryNzeGrJB5BPRSQvOqjLfT0sT3olTjVhem5lVLT33dE1eGFoK0s7rCsguGCcDk4SX3rZqL-H5RgRAzwyvsAPswZXS0IRq8121tHdqhjNLdjRHJcCWXvCpqv1z78TwfNRreBlMO0Nm7_UXN-hPOhSdLnI3VU26LxHFmyFKDZ4toNSloiULgQLB59wMvS1rZWPFmhIHf-Isk0U3ZgLMeY586sM7DqlXI0UslxY1VgwbKCXntyMDG4fNHaTA",
        },
        {
            id: 4, category: t('COMPUTING'), title: t('Precision Air Laptop'), rating: 4.9, reviews: 412, price: 1299.00,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7DcTDwcqS6_3jivbSNsgSM_v9xawU4OvdpyAAaLA3AtdF79alBiCdvKTZXHtCo2JeQL6wfsEn0skfTOx3C--7zHIi_eyfCvEc9lBCXv8iRgMMC0dd9FTuZQYb70zPBNsj1PLgL2HuEVWUtV3hFbMl_qUGCktb1o9weobLy2Dx_OB2fqz479bCU4thN9UXzkreQ4eXA331mtjiJqcrGt4UQ6l0MwK2Ezk4imQkUBmWDrIO0ft1aBfbC8KdIWPIsTyqGTTT2MMIgOc",
        },
    ];

    return (
        <Box sx={{ pt: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, }}> {t('Best Sellers')} </Typography>
                    <Typography variant="body1" sx={{ color: 'secondary.main', mt: 0.5 }}> {t('The most loved items this month.')}</Typography>
                </Box>

                <ButtonGroup variant="outlined" sx={{ p: 1, borderRadius: 2, border: 'none', gap: 2, }}>
                    <Button
                        onClick={() => setTab('all')}
                        sx={{
                            borderRadius: '16px !important', border: 'none', textTransform: 'none', fontWeight: 600,
                            backgroundColor: tab === 'all' ? '#1e40af' : 'transparent',
                            color: tab === 'all' ? '#ffffff' : '#64748b',
                            '&:hover': {
                                backgroundColor: tab === 'all' ? '#1e3a8a' : '#e2e8f0',
                                border: 'none',
                            },
                        }}
                    >
                        {t('All Products')}
                    </Button>
                    <Button
                        onClick={() => setTab('new')}
                        sx={{
                            borderRadius: '16px !important', border: 'none', textTransform: 'none', fontWeight: 600,
                            backgroundColor: tab === 'new' ? '#1e40af' : 'transparent',
                            color: tab === 'new' ? '#ffffff' : '#64748b',
                            '&:hover': {
                                backgroundColor: tab === 'new' ? '#1e3a8a' : '#e2e8f0',
                                border: 'none',
                            },
                        }}
                    >
                        {t('New Arrivals')}
                    </Button>
                </ButtonGroup>
            </Box>


            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card
                        sx={{
                            borderRadius: 3, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.11)', position: 'relative', height: '85%', display: 'flex',
                            flexDirection: 'column',
                            '&:hover .product-image': {
                                transform: 'scale(1.08)',
                            },
                            '&:hover .favorite-btn': {
                                opacity: 1,
                                transform: 'translateY(0)',
                            },
                        }}
                    >
                        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                            <CardMedia
                                component="img" height="100%"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuB8PJxC8pFCU5OU_a8Zrj9OKVAPMU5Ppjfth2NilnZ8guwUnuWbOAuakBBkMtIZ35xMKAgGr54gp6Hel8xK4iMhw83dooj6FvwGs1j_ES28spomysnrL3tB6Ic2EhbsNydc1WjfZ0_6g4FgIQ3fzemgS-n2xi_SwduUHu7p0avyWJ7Xw_FSPE2GFlugRgdkh1axdt7LF6ehmQ7PwvxiOEE3ftOyfhi3-1LKF0PwF9XALTodNuXRqNb0H3fh8lX1ALhO6fIYqq3mdIw"
                                alt={products.title}
                                className="product-image"
                                sx={{ objectFit: 'cover', transition: 'transform 0.3s ease-in-out', }}
                            />
                            <IconButton
                                size="small"
                                className="favorite-btn"
                                sx={{
                                    position: 'absolute', top: 10, right: 8, opacity: 0,
                                    transform: 'translateY(-5px)', transition: 'all 0.3s ease-in-out', backgroundColor: '#ffff', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <FavoriteBorderIcon fontSize="small" sx={{ color: '#ef4444' }} />
                            </IconButton>
                        </Box>

                        <CardContent sx={{ p: 3 }}>
                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 700, mb: 1, }}> {t('Ultra-Slim Smartphone X')} </Typography>
                            <Typography variant="body1" sx={{ color: 'secondary.main', mb: 3 }}>
                                {t('The ultimate power in your pocket. Experience a display that feels like a window to another world.')}
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, color: 'info.main' }}> $999.00 </Typography>

                                <Fab color="primary" size="medium" aria-label="add to cart" sx={{ backgroundColor: 'info.main' }}>
                                    <ShoppingCartIcon />
                                </Fab>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>



                <Grid item size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={3}>
                        {products.map((product) =>
                            <Grid item size={{ xs: 12, sm: 6 }} key={product.id}>
                                <Card
                                    sx={{
                                        borderRadius: 3, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.11)', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
                                        '&:hover .products-image': {
                                            transform: 'scale(1.08)',
                                        },
                                        '&:hover .favorite-btn': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    }}

                                >
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            className="products-image"
                                            component="img"
                                            height="170"
                                            image={product.image}
                                            alt={product.title}
                                            sx={{ objectFit: 'cover', transition: 'transform 0.3s ease-in-out', }}
                                        />

                                        <IconButton
                                            size="small" className="favorite-btn"
                                            sx={{
                                                position: 'absolute', top: 10, right: 8, opacity: 0, transform: 'translateY(-5px)',
                                                transition: 'all 0.3s ease-in-out', backgroundColor: '#ffff', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon fontSize="small" sx={{ color: '#ef4444' }} />
                                        </IconButton>
                                    </Box>

                                    <CardContent sx={{ p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mb: 0 }}>
                                        <Box>
                                            <Typography variant="caption" gutterBottom sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: 0.5 }}> {product.category} </Typography>
                                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, mt: 0.5, mb: 0.5 }}> {product.title} </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: 'primary.main' }} />
                                                <Typography variant="caption" gutterBottom sx={{ color: 'text.secondary' }}> ({product.reviews}) </Typography>
                                            </Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'info.main' }}> ${product.price.toFixed(2)} </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}

                    </Grid>
                </Grid>
            </Grid>

        </Box >
    );
}