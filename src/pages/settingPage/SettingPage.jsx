import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Swal from 'sweetalert2';
import ChangePass from './ChangePass';
import { useTranslation } from 'react-i18next';

export default function SettingPage() {
  const { t } = useTranslation();

  const notify = (message, severity = 'success') => {
    Swal.fire({
      title: severity === 'success' ? 'Success!' : 'Error!',
      text: message,
      icon: severity === 'success' ? 'success' : 'error',
      confirmButtonText: 'OK',
    });
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
      <Box sx={{ justifyContent: 'flex-end', mb: 3 }}>
        <Typography variant="h4" fontWeight={700} color="primary" textAlign="right" mb={1}>
          {t('Account Settings')}
        </Typography>
        <Typography variant="body1" color="secondary" textAlign="right" mb={4}>
          {t('Update your Email and password.')}
        </Typography>
      </Box>

      <Grid item size={{ xs: 12 }} sx={{ alignItems: 'start' }}>
        <ChangePass onNotify={notify} />
      </Grid>

      <Grid item size={{ md: 12 }} sx={{ alignItems: 'start', mt: 4 }}>
      
      </Grid>
    </Box>
  );
}