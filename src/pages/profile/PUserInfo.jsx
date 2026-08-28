import React from 'react'
import { Box, Paper, Stack, TextField, Typography, Divider, } from '@mui/material';
import useProfil from '../../hooks/useProfil';
import { useTranslation } from 'react-i18next';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function PUserInfo() {
    const { t } = useTranslation();
    const { data } = useProfil();
    console.log(data);

    const inputStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'background.paper',
        },
        '& .MuiInputLabel-root': {
            color: 'text.secondary',
        },
    };
    return (
        <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: 'background.paper', }} >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1.5, mb: 3, alignItems: 'center' }} >
                <PersonPinIcon sx={{ fontSize: 40, color: 'primary.main', px: 0 }} />
                <Typography
                    variant="h5"
                    fontWeight={700}
                    color="primary"
                >
                    {t('User Information')}
                </Typography>
            </Box>

            <Stack spacing={2.5}>
                <TextField
                    fullWidth
                    name="name"
                    label={t('Full Name')}
                    value={data?.fullName}
                    sx={inputStyles}
                />
                <Divider />

                <TextField
                    fullWidth
                    name="email"
                    label={t('User Email')}
                    type="email"
                    value={data?.email}
                    sx={inputStyles}
                />
                <Divider />

                <TextField
                    fullWidth
                    name="phone"
                    label={t('Phone Number')}
                    value={data?.phoneNumber}
                    sx={inputStyles}
                />
            </Stack>

        </Paper>
    )
}
