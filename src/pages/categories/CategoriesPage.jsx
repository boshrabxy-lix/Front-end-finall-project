import Category from '../../ui/categoryUi/CategoryPageUi';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Loader from '../../components/loader/Loader';
import useCategories from '../../hooks/useCategories';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

export default function CategoriesPage() {
    const { id } = useParams();
    const { t } = useTranslation();
    const { data, isLoading, isError, error } = useCategories(100);
    console.log(data);


    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className="categories" sx={{ py: 7 }}>
            <Typography component={'h2'} variant='h2' sx={{ mb: 3 }}> {t('Categories')}</Typography>
            <Grid container spacing={6}>
                {data.response.data.map(category =>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={category.id}>
                        <Category category={category} />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}