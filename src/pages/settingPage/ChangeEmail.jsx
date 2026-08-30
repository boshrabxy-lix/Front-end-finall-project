import React, { useState } from 'react';
import { Alert, Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import authAxiosInstance from '../../api/authAxiosInstance'; 
import { ChangeEmailSchema } from '../../validation/ChangeEmailSchema';

export default function ChangeEmail({ onNotify }) {
  const { t } = useTranslation();
  const [serverError, setServerError] = useState(null);

 const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({
    resolver: yupResolver(ChangeEmailSchema),
    defaultValues: { currentEmail: '', newEmail: '' },
  });

  const onSubmit = async (values) => {
    const confirm = await 
    Swal.fire({
      icon: 'warning',
      title: t('Confirm email change'),
      text: t('Are you sure you want to change your email?'),
      showCancelButton: true,
      confirmButtonText: t('Yes'),
      cancelButtonText: t('Cancel'),
    });
    if (!confirm.isConfirmed) return;

    setServerError(null);

    try {
      await authAxiosInstance.patch('/Profile/change-email', values);
      Swal.fire({
        icon: 'success',
        title: t('Email updated'),
        text: t('Your email has been changed successfully.'),
        confirmButtonText: t('Okay'),
      });
      onNotify?.(t('Email updated successfully.'), t('success'));
      reset();
    } catch (err) {
      const message =
        err.response?.data?.errors?.[0] ||
        err.response?.data?.message ||
        t('Failed to update email.');
      setServerError(message);
      onNotify?.(message, 'error');
    }
  };

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
   <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: 'background.paper', mb: 5, }} >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <OutgoingMailIcon sx={{ fontSize: 38, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight={700}>
          {t('Change email')}
        </Typography>
      </Box>

      <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2.5} noValidate>
        <TextField
          fullWidth
          label={t('Current Email')}
          type="email"
          {...register('currentEmail')}
          error={!!errors.currentEmail}
          helperText={errors.currentEmail?.message}
          sx={inputStyles}
        />

        <TextField
          fullWidth
          label={t('New Email')}
          type="email"
          {...register('newEmail')}
          error={!!errors.newEmail}
          helperText={errors.newEmail?.message}
          sx={inputStyles}
        />

        {serverError && <Alert severity="error">{serverError}</Alert>}

        <Divider />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{ mt: 1, py: 1.3, borderRadius: 2, fontWeight: 700 }}
        >
          {isSubmitting ? t('Saving...') : t('Save Email')}
        </Button>
      </Stack>
    </Paper>
  );
}