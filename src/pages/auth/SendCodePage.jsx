import React, { useState } from 'react'
import useSendCode from '../../hooks/useSendCode';
import Box from "@mui/material/Box";
import { FormControl } from '@mui/material';
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link as RouterLink} from "react-router-dom";
import Loader from '../../components/loader/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../validation/LoginSchema';
import axios from 'axios';



export default function SendCodePage() {
    const { t } = useTranslation();
    const [email, setEmail] = useState(" ");
    const { mutate:sendcodeForm, isPending: sendingPending } = useSendCode(email);
    const [ServerErrors, setServerErrors] = useState([]);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(LoginSchema), mode: 'onBlur'
    });

    return (
        <>
            <Container maxWidth="sm">
                <Box className="forgetPass" sx={{ p: 6, my: 3 }}>
                    <Typography variant='h2' gutterBottom>Forget Password</Typography>
                    <Box
                        component={"form"}
                          onSubmit={handleSubmit(sendcodeForm)}
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            mb: 4,
                            display: 'flex'
                        }}
                    >
                        <TextField
                            {...register("email")}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            fullWidth
                            label={t('User Email')}
                            variant="outlined"
                            error={errors.email}
                            helperText={errors.email?.message}
                            required
                            sx={{mb:4}}
                        />

                        <Button to={'/auth/resetpassword'} fullWidth variant="contained" type="submit" disabled={sendingPending } onClick={()=>sendcodeForm({email})}>
                            {sendingPending ? <Loader /> : 'Send Code'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
