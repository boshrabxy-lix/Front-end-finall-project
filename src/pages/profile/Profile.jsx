import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import useProfil from '../../hooks/useProfil';


export default function Profile() {
    const { data, isError, isLoading, error } = useProfil();
    return (
        <>
            <Box className="profilePage" sx={{ my: 4 }}>
                <Typography component={'h1'} variant='h2'>My Profile</Typography>
            </Box>


            <Grid container spacing={2}>

                <Grid item size={{ xs: 3, md: 4 }}>
                    <Paper sx={{ display: 'flex', flexDirection: 'column' }}>

                        <Link to=''>Info</Link>
                        <Link to="orders">Orders</Link>

                    </Paper>

                </Grid>

                    <Grid item size={{ xs: 3, md: 4 }}>
                        <Box>
                            <Outlet />
                        </Box>
                    </Grid>
            </Grid>



        </>
    )
}
