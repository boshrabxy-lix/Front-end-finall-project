import React from 'react'
import { Box, CardMedia, Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from 'react-i18next';


export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box className="HeroSection" sx={{ mb: 8, mt: 9, boxShadow: '1px 2px  5px #0043c81b', borderRadius: "12px" }} >
      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 6 }} sx={{ alignItems: 'center', display: 'flex' }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="60"
          data-aos-duration="1000"
        >
          <Box sx={{ pl: 4, alignItems: 'flex-start', my: 'auto', py: 4 }}>
            <Typography sx={{ color: '#0043C8', fontSize: 16, fontWeight: 200, letterSpacing: "1.5px", mb: 1.5, }} >
              {t('PREMIUM CURATION')}
            </Typography>

            <Typography component="span" sx={{ display: "block", fontSize: { xs: 32, md: 40 }, fontWeight: 700, lineHeight: 1.15 }} >
              {t('Elevate Your')}
            </Typography>

            <Typography component="span" sx={{ display: "block", color: '#0043C8', fontSize: { xs: 32, md: 40 }, fontWeight: 700, lineHeight: 1.15, }} >
              {t('Lifestyle')}
            </Typography>

            <Typography sx={{ color: '#9CA0AC', fontSize: 15, lineHeight: 1.7, maxWidth: 380, mt: 2 }} >
              {t('Discover a curated selection of global trends blended with modern Arabic sophistication.Seamless, high-end, and designed for you.')}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mt: 4 }}
            >
              <Button
                variant="contained" endIcon={<ArrowForwardIcon />} href='categories' sx={{
                  backgroundColor: "#2F53E0", textTransform: "none", borderRadius: "8px", px: 3, py: 2, fontSize: { xs: 12, md: 14 }, fontWeight: 600, boxShadow: "none",
                  "&:hover": { backgroundColor: "#10288a", transition: 'all .8s ease' }
                }} >
                {t('Shop Collection')}
              </Button>

              <Button variant="outlined" href='products' sx={{ color: "#2F53E0", borderColor: "#2F53E0", textTransform: "none", borderRadius: "8px", px: 3, py: 2, fontSize: { xs: 12, md: 14 }, fontWeight: 600, "&:hover": { borderColor: "#2F53E0", backgroundColor: "#2F53E0", color: '#fff', transition: 'all .8s ease' }, }} >
                {t('View Lookbook')}
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }} 
        data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="60"
          data-aos-duration="1000">
          <CardMedia component={'img'} image={'./src/assets/heroImage.webp'} sx={{ objectFit: 'contain', width: { sm: '100%' }, height: 'auto' }}></CardMedia>
        </Grid>

      </Grid>
    </Box>
  )
}