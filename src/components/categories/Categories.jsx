import { Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useCategories from './../../hooks/useCategories';
import { Grid } from '@mui/material';
import Category from '../../ui/categoryUi/CategoryUi';
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';

export default function Categories() {
    const { data, isLoading, isError, error } = useCategories();
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <>
         <Box className="categories" py={3}>
           <Typography component={'h2'} variant='h4' mb={2}>Categories</Typography>
           <Link to ='/categories'>Show more</Link>
           <Grid container spacing={6}>
             {data.response.data.map(category=>
               <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
                 <Category category={category} />
               </Grid>
             )}
           </Grid>
         </Box>
        </>
    )
}