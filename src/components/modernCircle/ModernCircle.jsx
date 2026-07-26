import React from 'react';
import { Box, Typography, TextField, Button, Link, Container } from '@mui/material';
import { useTranslation } from "react-i18next";

export default function NewsletterSection() {
    const { t } = useTranslation();

    return (
        <Box component={'section'} sx={{ py:{ xs: 3, md:7 }}}>
  
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, background: 'linear-gradient(135deg, #0057ff 0%, #0041c4 100%)', px: { xs: 3, md: 5}, py:{ xs: 7, md: 15}, textAlign: 'center', mx: 'auto'}}>
                <Box sx={{ position: 'absolute', top: -170, left: -60, width: 380, height: 380, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.08)', }} />
                <Box sx={{ position: 'absolute', bottom: -250, right: -110, width: 460, height: 460, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.06)', }} />


                <Box sx={{ position: 'relative', maxWidth: 560, alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }} > {t('Join the Modern Circle')} </Typography>

                    <Typography variant='body2' sx={{ color: '#ffffffb4', mb: 4, lineHeight: 1.7 }}>
                        {t('Subscribe to our newsletter and get 15% off your first order .Stay updated with the latest trenfs and exclusive drops.')}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1.9, justifyContent: 'center', mb: 2,flexWrap:'wrap'}} >
                        <TextField
                            placeholder={t('Enter Your Email Address...')}
                            variant="outlined"
                            sx={{
                                minWidth: 300,
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: '#1a1b1f',
                                    borderRadius: 2,
                                    color: '#ffffffb0',
                                    '& fieldset': { border: 'none' },
                                },
                                '& input::placeholder': {
                                    color: 'rgba(255,255,255,0.5)',
                                    opacity: 1,
                                },
                            }}
                        />
                        <Button variant="contained" href='register' sx={{ bgcolor: '#1a1b1f', color: '#ffffffd0', textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 4,py:{xs:2}}} >{t('Subscribe Now')}</Button>
                    </Box>

                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {t('By Subscribing ,you agree to our Privacy Policy and Terms of Service.')}
                    </Typography>
                </Box>
            </Box>
        </Box>
       
    );
}