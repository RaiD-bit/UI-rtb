import React from 'react'
import Box from '@mui/material/Box';
import { AppBar } from '@mui/material';
import utilStyles from '../styles/Utils.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const quoteString = 'Experience the innovation - get the full amdocs Real Time Billing tool.'
function Quote() {
  return (
    <AppBar position="static" className={utilStyles.QuoteBar}>
        <Container maxWidth="xl">
        <Typography
            textAlign='center'
            variant="h5"
            noWrap
            component="p"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 100,
              color: 'black',
              textDecoration: 'none',
            }}
          >
        {quoteString}
          </Typography>

        </Container>

        </AppBar>
  )
}

export default Quote