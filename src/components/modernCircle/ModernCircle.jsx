import { Box, Button, Container, InputBase, Link, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ModernCircle() {
      const { t } = useTranslation();
    return (
        <>
            <Box component={'section'} className='modernCircle' sx={{ py: 3, bgcolor: '#266638', height: '450px' }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: "center"}}>
                    <Typography component={'h1'} variant='h4' sx={{ mb: 1.2, color: 'white' }}>Join the Modern Circle</Typography>
                    <Typography component={'p'} variant="h6" sx={{ color: 'white' }}>{t('Subscribe to our newsletter and get 15% off your first order .Stay updated with the latest trenfs and exclusive drops.')}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1.2 }}>
                        <InputBase placeholder={t('Enter Your Email Address...')} sx={{ mt: 1, px: "54px", borderRadius: '4px', color: '#fff', flex: 1, fontSize: '14px', bgcolor: '#000000d2', alignItems: 'flexstart' }} />

                        <Button variant="contained" href={"/register"}
                            underline="none"
                            sx={{
                                bgcolor: 'black',
                                color: "white",
                                fontSize: "14px",
                                mt: 1.2,
                                px: "25px",
                                py: '20px',
                            }}>{t('Subscribe Now')}</Button>
                    </Box>

                    <Typography component={'p'} variant="body2" sx={{ color: 'white', mt: 2.2 }}>{t('By Subscribing ,you agree to our Privacy Policy and Terms of Service.')}
                    </Typography>

                </Box>
            </Box>
        </>
    )
}
