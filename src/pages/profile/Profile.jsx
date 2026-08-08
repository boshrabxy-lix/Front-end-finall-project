import React from "react";
import { Outlet } from 'react-router-dom';
import useProfil from '../../hooks/useProfil';
import Loader from '../../components/loader/Loader';
import { Box, Link, Grid, Typography, Avatar, Badge, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Divider, } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProfileSlider from "../../components/profileSlider/ProfileSlider";
import ProfileProdviewer from "./profileProdviewer";
import { useTranslation } from "react-i18next";

export default function Profile() {
    const { t } = useTranslation();
    const { data: user, isError, isLoading, error } = useProfil();
    console.log(user);
    return (
        <>
            <Box className="profilePage" sx={{ my: 3 }}>
                <Typography component={'h1'} variant='h2'>{t('My Profile')}</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item size={{ sm: 12, md: 4 }} sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3, borderRadius: 3, }}>
                    <ProfileSlider />
                </Grid>


                <Grid item size={{ xs: 12, md: 8 }}>
                    <Box>
                        <Outlet />
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}
