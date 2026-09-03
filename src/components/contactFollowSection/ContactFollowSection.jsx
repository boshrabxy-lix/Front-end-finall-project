import React from 'react';
import { Box, Typography, Grid, IconButton, Stack } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { useTranslation } from 'react-i18next';

export default function ContactFollowSection() {
  const { t } = useTranslation();
  const contactInfo = [
    { icon: <EmailOutlinedIcon sx={{ fontSize: 22 }} htmlColor="#0052cc" />, text: t('support@modernstore.com') },
    { icon: <PhoneOutlinedIcon sx={{ fontSize: 22 }} htmlColor="#0052cc" />, text: '+1 (555) 123-4567' },
    { icon: <LocationOnOutlinedIcon sx={{ fontSize: 22 }} htmlColor="#0052cc" />, text: t('123 Commerce Blvd, Tech City, TC 10101') },
  ];

  const socialLinks = [
    { icon: <InstagramIcon sx={{ fontSize: 20 }} />, label: t('Instagram') },
    { icon: <ShareIcon sx={{ fontSize: 20 }} />, label: t('Share') },
    { icon: <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />, label: t('Media') },
  ];

  return (
    <Box component="footer" sx={{ py: 6, px: { xs: 3, md: 5 }, mb: 4, }} >
      <Grid container spacing={7}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" color='primary' sx={{ fontWeight: 700, mb: 2.5 }}>
            {t('Get in Touch')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 3, maxWidth: 420, lineHeight: 1.6 }}
          >
            {t("We're here to help and answer any question you might have. We look forward to hearing from you.")}
          </Typography>

          <Stack spacing={2}>
            {contactInfo.map((item, index) => (
              <Stack key={index} direction="row" spacing={1.5} alignItems="center">
                {item.icon}
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" color='primary' sx={{ fontWeight: 700, mb: 2.5 }}>
            {t('Follow Us')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 3, maxWidth: 420, lineHeight: 1.6 }}
          >
            {t('Stay connected for the latest updates, exclusive deals, and behind-the-scenes content.')}
          </Typography>

          <Stack direction="row" spacing={2}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                aria-label={social.label}
                sx={{
                  backgroundColor: '#0052cc',
                  color: '#ffffff',
                  width: 44,
                  height: 44,
                  '&:hover': {
                    backgroundColor: '#003e99',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}