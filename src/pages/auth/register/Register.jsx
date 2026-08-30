import Box from "@mui/material/Box";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../../validation/RegisterSchema";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom';
import Loader from "../../../components/loader/Loader";
import Swal from "sweetalert2";


export default function Register() {
  const { t } = useTranslation();

  const [ServerErrors, setServerErrors] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const registerForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
      console.log("response", response);
      Swal.fire({
        icon: 'success',
        title: 'You have successfully registered',
        text: 'You have successfully registered',
        confirmButtonText: 'Okay'
      })

    } catch (err) {
      console.log(err.response.data.errors);
      setServerErrors(err.response?.data?.errors);
    }
  };

  return (
    <Container maxWidth="md">
      <Box component={"section"} className="register-form" sx={{ py: 5 }}>
        <Typography component={"h1"} variant="h2" sx={{ mb: 3 }}>
          {t('Register')}
        </Typography>
        {ServerErrors?.length > 0 ? ServerErrors.map((error) =>
          <Typography color="error" alignItems={'center'}>{error}</Typography>
        ) : ''}

        <Box
          component={"form"}
          onSubmit={handleSubmit(registerForm)}
          sx={{
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            py: 2,
            display: 'flex'
          }}
        >
          <TextField
            {...register("userName")}
            fullWidth
            label={t('User Name')}
            variant="outlined"
            error={errors.userName}
            helperText={errors.userName?.message}
          />
          <TextField
            {...register("fullName")}
            fullWidth
            label={t('Full Name')}
            variant="outlined"
            error={errors.fullName}
            helperText={errors.fullName?.message}
          />
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
          <TextField
            {...register("phoneNumber")}
            fullWidth
            label={t('Phone Number')}
            variant="outlined"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
            <Button variant="contained" type="submit" disabled={isSubmitting} >
              {isSubmitting ? <Loader /> : 'Register'}
            </Button>
            <Button variant="text" component={Link} underline='none' to={'/login'}> {t('Already you have account?')}</Button>
          </Box>


        </Box>


      </Box>
    </Container>
  )
}
