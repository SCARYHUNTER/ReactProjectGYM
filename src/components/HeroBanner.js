import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import BannerImage from '../assets/images/banner.jpeg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' }, backgroundColor: '#E5D9B3' }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">INDIA FIT INITIATIVE </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Empower Your Body,<br />
      Empower Your Life
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Bring out the BEST from you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px', boxShadow: 1 }}>
      Exercise
    </Typography>
    <img src={BannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
