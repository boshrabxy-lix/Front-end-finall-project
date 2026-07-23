import React from 'react'
import { Box ,Grid} from '@mui/material';



export default function Hero() {
  return (
    <Box className="HeroSection" sx={{py:3}}>
      <Grid container spacing={3} sx={{ mb: 5, pb: 5 }}>
        <Grid item size={{ xs: 12, sm: 6 }}>

        </Grid>
         <Grid item size={{ xs: 12, sm: 6 }}>

        </Grid>

      </Grid>
    </Box>
  )
}
