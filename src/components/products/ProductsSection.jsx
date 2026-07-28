import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Grid, Box, Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import Loader from '../loader/Loader';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Product from '../../ui/product/ProductSectionUi';


export default function ProductsSection() {
    const { t } = useTranslation();
    const { data, isError, isLoading, error } = useProducts(3);
    if (isLoading) return <Loader />
    if (isError) return <Typography color='error'>{error}</Typography>


    return (
        <Box className='products' component="section" sx={{
            py: 5,
            maxWidth: 1100,
            mx: "auto",
            my: 4,
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, py: 3, }}>
                <Box>
                    <Typography component={'h2'} variant='h4' sx={{ fontSize: 38, fontWeight: 700 }}>{t('Products')}</Typography>
                    <Typography variant="body2" sx={{ color: "#6B7280" }}>
                        The most loved items this month.
                    </Typography>
                </Box>
                <Box sx={{ cursor: "pointer", alignItems: "center" }}>
                    <Button component={RouterLink} to='/products' sx={{
                        borderRadius: "90px", fontSize: 12, TextDecoder: 'none', transition: "bgcolor 0.2s ease",
                    }}>{t('All Products')}
                        <ChevronRightIcon sx={{ fontSize: 16 }} />
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }}>
                {data.response.data.map(product =>
                    <Product product={product} key={product.name} />
                )}
            </Grid>
        </Box>
    )
}