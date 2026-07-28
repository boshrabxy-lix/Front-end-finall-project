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
import { Link as RouterLink } from "react-router-dom";



export default function SendCodePage() {
    const [email,setEmail]=useState("");
    const { data, isError, isLoading, error } = useSendCode({email});
    console.log(data);
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        mode: 'onBlur'
    });

    return (
        <>
            <Container maxWidth="sm">
                <Box className="forgetPass" sx={{ p: 6 ,my:3 }}>
                    <Typography variant='h2' gutterBottom>Forget Password</Typography>
                    <Box
                        component={"form"}
                        onSubmit={handleSubmit}
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
                        />

                    </Box>


                    <Button component={RouterLink} to={'/auth/resetpassword'} fullWidth variant="contained" type="submit" disabled={isSubmitting}  >
                        {isSubmitting ? <Loader /> : 'Send Code'}
                    </Button>
                </Box>
            </Container>
        </>
    )
}
