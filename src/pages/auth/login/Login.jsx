import Box from "@mui/material/Box";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import useAuthStore from "../../../store/useAuthStore";
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../../../components/loader/Loader";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import axios from "axios";
import { SendCodeSchema } from "../../../validation/SendCodeSchema";

export default function Login() {
    const { t } = useTranslation();
  const [ServerErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(SendCodeSchema), mode: 'onBlur'
  });

 const loginForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/login`, data);
     if (response.status ===200){
      locslStorage.setItem("accessToken",response.data.accessToken)
     }
      console.log("responce", response);
    }catch (err) {
      console.log(err.response.data.errors);
      setServerErrors(err.response.data.errors);
    }
  };



  return (
    <Container maxWidth="sm">
      <Box component={"section"} className="Login-form" sx={{ py: 5 }}>
        <Typography component={"h1"} variant="h2" sx={{ mb: 3 }}>
          {t('Login')}
        </Typography>
        {ServerErrors?.length > 0 ? ServerErrors.map((error) =>
          <Typography color="error" alignItems={'center'}>{error}</Typography>
        ) : ' '}

        <Box
          component={"form"}
          onSubmit={handleSubmit(loginForm)}
          sx={{
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            mb: 2,
            display: 'flex'
          }}
        >
          <TextField
            {...register("email")}
            fullWidth
            label={t('User Email')}
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password")}
            fullWidth
            label={t('Password')}
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
          />

          <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
            <Button variant="contained" type="submit" disabled={isSubmitting} >
              {isSubmitting ? <Loader /> : 'Login' }
            </Button>
            <Button variant="Link" href={'/auth/Account/SendCode'} sx={{ underline: 'none' }}>{t('Forgit password?')}</Button>
          </Box>

        </Box>
      </Box>
    </Container>
  );
}
