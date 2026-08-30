import React from "react";
import { Outlet } from 'react-router-dom';
import useProfil from '../../hooks/useProfil';
import { Box, Grid, Typography } from "@mui/material";
import ProfileSlider from "../../components/profileSlider/ProfileSlider";
import { useTranslation } from "react-i18next";

export default function Profile() {
    const { t } = useTranslation();
    const { data: user } = useProfil();
    console.log(user);
    return (
        <>
            <Box className="profilePage" sx={{ my: 3 }}>
                <Typography component={'h1'} variant='h2'>{t('My Profile')}</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 4 }} sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3, borderRadius: 3, }}>
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
