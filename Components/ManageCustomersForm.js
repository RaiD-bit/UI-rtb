import { Container, maxWidth } from '@mui/system'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TitleSelect from './TitleSelect';
import { Select, TextField } from '@mui/material';
import FormControl from '@mui/material';
import InputLabel from '@mui/material';
import MenuItem from '@mui/material';
import StateSelect from './StateSelect';
import CountrySelect from './CountrySelect'
import Language from './LanguageSelector';
import BillingPreference from './BillingPreferenceSelect';

export default function ManageCustomersForm() {
  return (
    <Container component="main" >
        
            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start">
            
                <Grid item md={2} xs={2}>
                    <TitleSelect></TitleSelect>
                </Grid>

                <Grid item md={4}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth/>
                </Grid>

                <Grid item md={6}>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item md={6} >
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                </Grid>

                <Grid item md={6} >
                    <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth/>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Address line 1" variant="outlined" fullWidth/>
                </Grid>
                
                <Grid item md={6}>
                    <TextField id="outlined-basic" label="Address line 2" variant="outlined" fullWidth/>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item md={3}>
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                </Grid>

                <Grid item md={3}>
                    <StateSelect></StateSelect>
                </Grid>

                <Grid item md={3}>
                    <TextField id="outlined-basic" label="postcode" variant="outlined" fullWidth/>
                </Grid>
                <Grid item md={3}>
                    <CountrySelect></CountrySelect>
                </Grid>
            </Grid>
            
            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid item md={3}>
                    <BillingPreference></BillingPreference>
                </Grid>

                <Grid item md={3}>
                    <Language></Language>
                </Grid>

            </Grid>
    </Container>
  )
}
