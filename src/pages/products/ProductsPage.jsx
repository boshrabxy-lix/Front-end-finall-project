import React, { useMemo, useState } from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';
import { Link } from "react-router-dom"
import Product from '../../ui/product/ProductUi';
import FilterSlide from '../../components/filterSlide/FilterSlide';

function sortProduct(products, sortBy, order) {
    return [...products].sort((a, b) => {
        let result;
        if (sortBy === "price") result = a.price - b.price;
        else if (sortBy === "rating") result = a.rating - b.rating; // تأكد إنه اسم الحقل صحيح بالمنتج عندك
        else result = a.name.localeCompare(b.name);
        return order === "asc" ? result : -result;
    });
}

export default function ProductsPage() {
    const { t } = useTranslation();
    const { data, isLoading, error, isError } = useProducts(100);
    const [currentCategory, setCurrentCategory] = useState({ id: 'all' });

    const [applied, setApplied] = useState({
        min: -Infinity,
        max: Infinity,
        sortBy: "price",
        order: "asc",
    });


    const visibleProducts = useMemo(() => {
        if (!data) return [];
        const inRange = data.response.data.filter((product) => {
            const matchesCategory =
                currentCategory.id === 'all' || product.categoryId === currentCategory.id;
            const matchesPrice =
                product.price >= applied.min && product.price <= applied.max;
            return matchesCategory && matchesPrice;
        });

        return sortProduct(inRange, applied.sortBy, applied.order);
    }, [data, currentCategory, applied]);



    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <>
            <Box className="productsSection" sx={{ py: 5 }}>
                <Typography component={'h2'} variant='h2' sx={{ mb: 3 }}> {t('Products')}</Typography>
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
                                <Typography variant='h6' className="no-results" color="error">No products match these filters.</Typography>
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
