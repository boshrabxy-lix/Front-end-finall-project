import React, { useState } from 'react';
import { Box, Button, Divider, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import useAuthResetPass from '../../hooks/useAuthResetPass';
import { changePasswordSchema } from '../../validation/ChangePassSchema';
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function ChangePass({ onNotify }) {
  const { t } = useTranslation();
  const [ServerErrors, setServerErrors] = useState([]);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const { mutate: resetPassword, isPending } = useAuthResetPass({
    onSuccess: () => {
      reset();
      Swal.fire({
        icon: 'success',
        title: t('You have successfully changed your password'),
        text: t('You have successfully changed your password'),
        confirmButtonText: t('Okay'),
      });
    },

    onError: (err) => {
      const apiErrors = err.response?.data?.errors;
      const messages = apiErrors
        ? Object.values(apiErrors).flat()
        : [err.response?.data?.title || t('Something went wrong')];
      setServerErrors(messages);
    },
  });



  const togglePasswordVisibility = (field) => {
    setShowPasswords((previous) => ({
      ...previous,
      [field]: !previous[field],
    }));
  };

  const changePasswordForm = (data) => {
    setServerErrors([]);
    resetPassword({
      CurrentPassword: data.current,
      NewPassword: data.newPassword,
      ConfirmNewPassword: data.confirm,
    });
  };

  const passwordAdornment = (field, label) => (
    <InputAdornment position="end">
      <IconButton
        size="small"
        edge="end"
        aria-label={label}
        onClick={() => togglePasswordVisibility(field)}
        sx={{ p: 0.5, color: 'text.secondary' }}
      >
        {showPasswords[field] ? (
          <VisibilityOffIcon sx={{ fontSize: 20 }} />
        ) : (
          <VisibilityIcon sx={{ fontSize: 20 }} />
        )}
      </IconButton>
    </InputAdornment>
  );


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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <LockResetIcon sx={{ fontSize: 38, color: 'primary.main' }} />
        <Typography variant="h6" fontWeight={700}>
          {t('Change Password')}
        </Typography>
      </Box>

      {ServerErrors?.length > 0 ? ServerErrors.map((error, index) => (
        <Typography key={index} color="error" alignItems={'center'}>
          {error}
        </Typography>
      ))
        : ''}

      <Box component="form" onSubmit={handleSubmit(changePasswordForm)}>
        <Stack spacing={2.5}>
          <TextField
            {...register('current')}
            fullWidth
            label={t('Current Password')}
            type={showPasswords.current ? 'text' : 'password'}
            error={!!errors.current}
            helperText={errors.current?.message}
            sx={inputStyles}
            slotProps={{
              input: {
                endAdornment: passwordAdornment('current', 'Show Current Password'),
              },
            }}
          />

          <TextField
            {...register('newPassword')}
            fullWidth
            label={t('New Password')}
            type={showPasswords.newPassword ? 'text' : 'password'}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
            sx={inputStyles}
            slotProps={{
              input: {
                endAdornment: passwordAdornment('newPassword', 'Show New Password'),
              },
            }}
          />

          <TextField
            {...register('confirm')}
            fullWidth
            label={t('Confirm New Password')}
            type={showPasswords.confirm ? 'text' : 'password'}
            error={!!errors.confirm}
            helperText={errors.confirm?.message}
            sx={inputStyles}
            slotProps={{
              input: {
                endAdornment: passwordAdornment('confirm', 'Show Confirm New Password'),
              },
            }}
          />

          <Divider />

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isSubmitting || isPending}
            sx={{ py: 1.3, borderRadius: 2, fontWeight: 700 }}
          >
            {isSubmitting || isPending ? t('Updating...') : t('Update Password')}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}