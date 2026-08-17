import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import useResetPass from '../../hooks/useResetPass'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetSchema } from "../../validation/ResetSchema";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";


export default function ResetPage() {
  const { t } = useTranslation();

  const { mutate, isPending, isError, error } = useResetPass();
  const [serverErrors, setServerErrors] = useState([]);
  const [digits, setDigits] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
    resolver: yupResolver(resetSchema),
  });

  const ResetForm = ({ code, email, newPassword }) => {
    setServerErrors([]);
    mutate({ code, email, newPassword },
      {
        onSuccess: (response) => {
          console.log("PassWord Reset Successfully", response);
          Swal.fire({
            icon: 'success',
            title: 'Password has been reset successfully',
            text: 'Go To Login',
            confirmButtonText: 'Okay'
          })
          
          navigate('/login');
        },
        onError: (err) => {
          setServerErrors(err?.response?.data?.errors);
          console.log(err?.response?.data?.errors);
        },
      }
    );
  };

  if (isPending) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 7, mt: 5, mb: 5 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(ResetForm)}
        sx={{ width: "100%", maxWidth: 400, textAlign: "center", px: 3 }}
      >
        <Typography component="h2" variant="h3" color="info" sx={{ fontWeight: 800, mb: 2 }}>
          {t('Reset Page')}
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 4 }}>
          {t('Enter the Verify Code 4-Digit sent to your Email')}
        </Typography>

        <TextField
          {...register("code")}
          error={!!errors.code}
          helperText={errors.code?.message}
          autoComplete="one-time-code"
          fullWidth
          label={t('Verify Code')}
          inputProps={{
            maxLength: 4,
            inputMode: "numeric",
            style: { textAlign: "center", letterSpacing: "1.5rem", fontSize: 22, fontWeight: 600 },
          }}
          sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "15px" }, }}
        />
        {serverErrors > 0 && (
          <Alert severity="error" sx={{ mb: 2, textAlign: "left" }}>
            {serverErrors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
          </Alert>
        )}
        <TextField
          {...register("email")}
          fullWidth
          type="email"
          label={t('User Email')}
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{ mb: 3 }}
        />

        <TextField
          {...register("newPassword")}
          fullWidth
          type="password"
          label={t('New Password')}
          error={!!errors.newPassword}
          autoComplete="new-password"
          helperText={errors.newPassword?.message}
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="info"
          disabled={isSubmitting || isPending}
          sx={{ py: 1.7, borderRadius: "10px", fontWeight: 700, color: "#fff" }}
        >
          {isSubmitting || isPending ? (
            <Loader size={24} sx={{ color: "#fff" }} />
          ) : (
            'Reset Password')}
        </Button>
      </Box>
    </Box>
  );
}