import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const { register, handleSubmit } = useForm({});

  const registerForm = async (values) => {
    try {
      const response = await axios.post(
        `https://knowledgeshop.runasp.net/api/auth/Account/Register`,
        values,
      );
      console.log("responce", response);
    } catch (error) {
      console.log("catch error", error);
    }
  };

  return (
    <Box component={"section"} className="register-form" py={5}>
      <Typography component={"h1"} variant="h3">
        Register
      </Typography>

      <Box
        component={"form"}
        onSubmit={handleSubmit(registerForm)}
        sx={{
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          mb: 3,
          py: 3,
        }}
        py={2}
        display={"flex"}
      >
        <TextField
          {...register("userName")}
          fullWidth
          label="User Name"
          variant="outlined"
        />
        <TextField
          {...register("fullName")}
          fullWidth
          label="Full Name"
          variant="outlined"
        />
        <TextField
          {...register("email")}
          fullWidth
          label="User Email"
          variant="outlined"
        />
        <TextField
          {...register("password")}
          fullWidth
          label="Password"
          variant="outlined"
        />
        <TextField
          {...register("phoneNumber")}
          fullWidth
          label="Phone Number"
          variant="outlined"
        />
        <Button variant="contained " type="submit">
          Register
        </Button>
      </Box>
    </Box>
  );
}
