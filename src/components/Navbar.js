import React from 'react';
import { Link } from 'react-router-dom';// its an element that lets the user navigate to another page by clicking or tapping in it.//
import { Stack } from '@mui/material';// stack is container component for arranging elements vertically or horizontolly. Stack is ideal for one dimensional layout while Grid is preferable for two dimensional Layout//

import Logo from '../assets/images/Logo.png';

const Navbar = () => ( // an arrow functoion part of ES6+ JS .
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, backgroundColor: '#A03C1C', justifyContent: 'none' }} px="20px">

    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#130D0C', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#130D0C' }}>Exercise</a>
    </Stack>
  </Stack>
);
// sx is short hand for styling in mui allows to style directly within component in a more concise way.
// xs extra small screens  0px and up sm : small screens 600px and up
// mt margin top.
export default Navbar;
