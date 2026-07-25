import React from 'react'
import { Box, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';


export default function Profile() {
    return (
        <>
            <Box>My Profile</Box>
            <Link to=''>Info</Link>
            <Link to="orders">Orders</Link>

            <Box>
                <Outlet />
            </Box>
        </>
    )
}
