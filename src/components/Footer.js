import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#F0DEE4">
    <Stack gap="40px" sx={{ alignItems: 'center', backgroundColor: '#F0DEE4' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '130px', height: '130px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px', backgroundColor: '#F0DEE4' } }} mt="41px" textAlign="center" pb="40px">VITALITY ❤️ HUB</Typography>
  </Box>
);

export default Footer;
