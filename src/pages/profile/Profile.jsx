import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import useProfil from '../../hooks/useProfil';
import Loader from '../../components/loader/Loader';
import { Box, Link, Grid, Typography, Avatar, Badge, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Divider, } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ProfileSlider from "../../components/profileSlider/ProfileSlider";

export default function Profile() {
    const { data: user, isError, isLoading, error } = useProfil();
    console.log(user);

    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <>
            <Box className="profilePage" sx={{ my: 3 }}>
                <Typography component={'h1'} variant='h2'>My Profile</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item size={{ xs: 6, md: 4 }} sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3, borderRadius: 3, }}>
                  <ProfileSlider/>
                </Grid>



                <Grid item size={{ xs: 6, md: 8 }}>
                    <Box>
                        <Outlet />
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}
