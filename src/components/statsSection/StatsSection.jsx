import { Box, Grid, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const stats = [
  { icon: PeopleAltOutlinedIcon, value: '150K+', labelKey: 'Happy Customers' },
  { icon: PublicOutlinedIcon, value: '50+', labelKey: 'Global Brands' },
  { icon: SupportAgentOutlinedIcon, value: '24/7', labelKey: 'Premium Support' },
  { icon: VerifiedUserOutlinedIcon, value: '100%', labelKey: 'Secure Payments' },
];

export default function StatsSection() {
  return (
    <Box sx={{ backgroundColor: 'secondary.light', borderRadius: 3, py: { xs: 4, md: 5 }, px: { xs: 3, md: 4 }, }}
      data-aos="flip-down"
      data-aos-offset="100"
      data-aos-duration="900"
    >
      <Grid container spacing={{ xs: 2, md: 3 }} >
        {stats.map(({ icon: Icon, value, labelKey }) => (
          <Grid item size={{ xs: 6, sm: 3 }} key={labelKey}>
            <Box sx={{ textAlign: 'center' }}>
              <Icon sx={{ color: '#3B5BFF', fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.5rem' }, mb: 0.5, }} >
                {value}
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }} >
                {labelKey}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
