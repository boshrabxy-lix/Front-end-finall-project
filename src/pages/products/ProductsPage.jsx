import React, { useMemo, useState } from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Container, InputBase, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';
import { Link } from "react-router-dom"
import Product from '../../ui/product/ProductUi';
import FilterSlide from '../../components/filterSlide/FilterSlide';
import SearchIcon from "@mui/icons-material/Search";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

function sortProduct(products, sortBy, order) {
    return [...products].sort((a, b) => {
        let result;
        if (sortBy === "price") result = a.price - b.price;
        else if (sortBy === "rating") result = a.rate - b.rate;
        else result = a.name.localeCompare(b.name);
        return order === "asc" ? result : -result;
    });
}

export default function ProductsPage() {
    const { t } = useTranslation();
    const { data, isLoading, error, isError } = useProducts(100);
    const [currentCategory, setCurrentCategory] = useState({ id: 'all' });
    const [searchTerm, setSearchTerm] = useState('');

    const [applied, setApplied] = useState({
        min: -Infinity,
        max: Infinity,
        sortBy: "price",
        order: "asc",
    });


    const visibleProducts = useMemo(() => {
        if (!data) return [];
        const normalizedSearch = searchTerm.trim().toLowerCase();
        const inRange = data.response.data.filter((product) => {
            const matchesCategory = currentCategory.id === 'all' || product.categoryId === currentCategory.id;
            const matchesPrice = product.price >= applied.min && product.price <= applied.max;
            const matchesQuery = !normalizedSearch || product.name.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesPrice && matchesQuery;
        });

        return sortProduct(inRange, applied.sortBy, applied.order);
    }, [data, currentCategory, applied, searchTerm]);


    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <>
            <Box className="productsSection" sx={{ py: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography component={'h2'} variant='h2' sx={{ mb: 3 }}> {t('Products')}</Typography>

                    <Box
                        sx={{ display: 'flex', gap: 3, alignItems: 'center', bgcolor: 'white', borderRadius: "20px", px: 4, py: 0.5, maxWidth: 340, ml: 3, }} >
                        <SearchIcon sx={{ color: "#595e65d0", fontSize: 20, bgcolor: 'white' }} />
                        <InputBase
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={t('Search for products...')}
                            sx={{
                                color: "#000000d0",
                                fontSize: "0.9rem",
                                alignItems: "center",
                                bgcolor: 'white'
                            }}
                        />
                    </Box>
                </Box>


                <Grid container spacing={3}>
                    <Grid item size={{ sm: 3 }}>
                        <FilterSlide
                            currentCategory={currentCategory}
                            onCategoryChange={setCurrentCategory}
                            onApply={setApplied} />
                    </Grid>

                    <Grid item size={{ sm: 9 }}>
                        <Grid container spacing={2}>
                            {visibleProducts.length === 0 ? (
                                <Typography variant='h6' className="no-results" color="error">
                                    <DoNotDisturbAltIcon fontSize='small' />
                                    {t('No products match these filters.')}
                                </Typography>
                            ) : (
                                visibleProducts.map((product) => (
                                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                                        <Product product={product} />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
