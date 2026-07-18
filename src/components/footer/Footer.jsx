import React from 'react'
import { Box, Container, Grid, Typography, Button, InputBase, Link, Divider, } from '@mui/material';

export default function Footer() {
  const StaticCategories = ['Daily Deals', 'Electronics', 'Best Sellers', 'New Arrivals'];
  const ContactList = ['About Us', 'Privacy Policy', 'Terms of Service', 'Contact Us'];
  
  return (
    <>
      <Box component="section" sx={{ background: "linear-gradient(90deg, #142244 0%, #1c2f56 100%)", pt: 15, pb: 4 }}>
        <Box >
          <Container maxWidth="lg">
             <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }} gutterBottom>
                KASHOP
              </Typography>
            <Grid container spacing={6} sx={{ mb: 5, pb: 5 }}>
             
              <Grid item size={{xs:12,sm:6,md:4}}>
                <Typography variant="body2" sx={{ color: '#ffffff3f', mt: 2, lineHeight: 1.2, maxWidth: 280 }}>
                  Your ultimate destination for premium electronics and lifestyle products. We <br />focus on quality and innovation.
                </Typography>
              </Grid>

              <Grid item size={{xs:6,sm:6,md:2}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  {StaticCategories.map((item) => (
                    <Link key={item} href="#" underline="none" sx={{ color: "white", fontSize: '0.85rem', '&:hover': { color: 'gray' } }}>
                      {item}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item size={{xs:6,sm:6,md:2}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {ContactList.map((item) => (
                    <Link key={item} href="#" underline="none" sx={{ color: "white", fontSize: '0.85rem', '&:hover': { color: 'gray' } }}>
                      {item}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item size={{xs:12,sm:5,md:4}}>
                <Typography component={"p"} variant="body2" sx={{ mb: 2, color: '#ffffff3f' }}>
                  Get the latest updates on new products<br /> and upcoming sales.
                </Typography>
                <Box sx={{ display: 'flex', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2, p: 0.5, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <InputBase placeholder="Your email" sx={{ px: 2, color: 'white', flex: 1, fontSize: '0.85rem' }} />
                  <Button variant="contained" color="primary" sx={{ px: 3, borderRadius: 1.5, textTransform: 'none' }}>
                    Join
                  </Button>
                </Box>
              </Grid>

            </Grid>

            <Divider sx={{ borderColor: '#ffffff34', borderWidth: 1.5, borderStyle: 'solid', my: 3 }} />

            <Typography variant="caption" sx={{ display: 'flex', color: '#ffffff3f', alignItems: 'center', justifyContent: 'center' }}>
              © 2026 KASHOP. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  )
}