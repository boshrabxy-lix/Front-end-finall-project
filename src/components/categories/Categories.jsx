import React from "react";
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import useCategories from './../../hooks/useCategories';
import { Grid } from '@mui/material';
import Category from '../../ui/categoryUi/CategorySectionUi';
import Loader from '../loader/Loader';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Categories() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useCategories();
  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>

  return (
    <>
      <Box className="categories" sx={{ py: 5, mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2, alignItems: 'center', mb: 4, }}>
          <Typography component={'h2'} variant='h4' sx={{ my: 2, fontSize: 32, fontWeight: 700 }}>{t('Shop By category')}</Typography>

          <Box sx={{ cursor: "pointer", alignItems: "center", }}>
            <Button component={RouterLink} to='/categories' sx={{
              fontSize: 12, TextDecoder: 'none', color: "#9AA4F5", transition: "color 0.2s ease",
              " &hover": {
                color: "#7C89F0"
              }
            }}>{t('Show more')}
              <ChevronRightIcon sx={{ fontSize: 16 }} />
            </Button>

          </Box>
        </Box>

        <Grid container spacing={6}>
          {data.response.data.map(category =>
            <Grid item size={{ xs: 6, sm: 6, md: 3 }} key={category.name}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <Category category={category} />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  )
}