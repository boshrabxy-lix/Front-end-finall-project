import Box from "@mui/material/Box";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "../../../validation/LoginSchema";
import CircularProgress from "@mui/material/CircularProgress";
import useAuthStore from "../../../store/useAuthStore";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [ServerErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();
  const setToken =useAuthStore((state)=>state.setToken);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(LoginSchema), mode: 'onBlur'
  });

  const loginForm = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
      if (response.status === 200) {
        setToken(response.data.accessToken);
        navigate('/');
      }
      console.log("responce", response);
    } catch (err) {
      console.log(err.response.data.errors);
      setServerErrors(err.response.data.errors);
    }
  };
  
  return (
    <Box component={"section"} className="register-form" py={5}>
      <Typography component={"h1"} variant="h3">
        Login
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
          mb: 3,
          py: 3,
        }}
        py={2}
        display={'flex'}
      >

        <TextField
          {...register("email")}
          fullWidth
          label="User Email"
          variant="outlined"
          error={errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("password")}
          fullWidth
          label="Password"
          variant="outlined"
          error={errors.password}
          helperText={errors.password?.message}
        />

        <Button variant="contained " type="submit" disabled={isSubmitting} >
          {isSubmitting ? <CircularProgress /> : 'Login'}

        </Button>
      </Box>
    </Box>
  );
}
