import * as React from 'react';
import NavBar from './components/navbar'
import CardShort from './components/card_short'
import CardOpen from './components/card_open'
import { Grid } from '@mui/material';
import Footer from './components/footer'

export default function BasicTextFields() {
  return (
    <div>
      <NavBar/>
      <Grid container justifyContent="center" spacing={10} marginTop={2} marginBottom={6}>
        <Grid item xs={8} sm={6} md={4}>
          <CardShort/>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <CardOpen/>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}
