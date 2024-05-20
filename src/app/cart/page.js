'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { useState, useEffect } from 'react'






export default function Page() {


  //
  // function for putting items into the shopping cart.
  //





  const [data, setData] = useState(null)
 
  useEffect(() => {
    fetch('api/getCartItems')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })

  }, [])
 

  if (!data) return <p>No data</p>



  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: green[500],
      },
    },
  });
  
  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main"  maxWidth="xs">
 
       <div style={{fontSize: '40px'}} > Shopping Cart</div>
        <div>
      {
        data.map((item, i) => (
          <div style={{padding: '20px'}} key={i} >
            <br></br>
            {item.pname}: {item.quantity}
            <br></br>
          </div>
        ))
      }
      <Button onClick={() => putInCart(item.pname, document.getElementById('quantity').value)} variant="outlined">Checkout</Button>
          
    </div>

    </Container>

    </ThemeProvider>

  );
}