import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { Divider, FormControl } from '@mui/material';
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Loader from '../../components/loader/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { SendCodeSchema } from '../../validation/SendCodeSchema';
import { useQueryClient } from '@tanstack/react-query';



export default function SendCodePage() {
    const queryClient = useQueryClient();
    const { t } = useTranslation();
    const [email, setEmail] = useState(" ");
    const [ServerErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(SendCodeSchema), mode: 'onBlur'
    });

    const sendcodeForm = async (email) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BURL}/auth/Account/SendCode`,
              { email }
            );
            queryClient.invalidateQueries(
                console.log("response", response),
                { queryKey: ['sendCode', variables.email] }),
            navigate('auth/Account/resetpassword')
        } catch (err) {
            console.log(err.response.data.errors);
            setServerErrors(err.response.data.errors);
        }
    };


    return (
        <>
            <Container maxWidth="sm">
                <Box className="forgetPass" sx={{ p: 6, my: 3 }}>
                    <Box>
                        <Typography variant='h3' >Forget Password</Typography>
                        <Typography variant='body1' gutterBottom sx={{ color: '#3b82f6' }}>*Please enter your email to send reset code </Typography>
                        <Divider sx={{ mt: 1, borderStyle: 'solid', borderWidth: 1.6, borderColor: 'secendory' }} />
                    </Box>

                    <Box
                        component={"form"}
                        onSubmit={handleSubmit(sendcodeForm)}
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            my: 4,

                            display: 'flex'
                        }}
                    >
                        <TextField
                            {...register("email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label={t('User Email')}
                            variant="outlined"
                            error={errors.email}
                            helperText={errors.email?.message}
                            required
                            sx={{ mb: 4 }}
                        />

                        <Button to={'/auth/resetpassword'} fullWidth variant="contained" type="submit" disabled={isSubmitting} onClick={() => sendcodeForm({ email })}>
                            {isSubmitting ? <Loader /> : 'Send Code'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
