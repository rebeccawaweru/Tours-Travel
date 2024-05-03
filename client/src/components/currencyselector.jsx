// LanguageSelector.js
import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
const styles = {
    container: {
      position: 'fixed',
      maxHeight: 'calc(100vh - 100px)', 
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'white',
      padding: '20px',
      zIndex: '60',
    },
  };
function CurrencySelector({link,rates}) {
  const [dropdown, setDropdown] = useState(false)
  const handleChange = (url) => localStorage.setItem('link', url)
  return (
    <Box  sx={{cursor:"pointer"}}>
  {!dropdown &&  <IconButton sx={{ fontSize: 14, letterSpacing:1 }}>KES</IconButton>}
    {dropdown &&  <Box borderRadius={5} sx={{overflowY:"scroll"}} width="80%" style={styles.container}>
          <Grid display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6" fontWeight="bold" color="black">Choose currency</Typography>
          <IconButton  sx={{color:"gray"}}><Close  onClick={()=>setDropdown(false)}/></IconButton>
          </Grid>
         <Grid maxWidth borderRadius={5} container>
          {(rates && rates.length > 0) ? rates.map((rate)=>{
            return <Typography color="black">{rate.currency}</Typography>
          }) : <Typography color="black">Fetching currencies....</Typography>}
      </Grid>
    </Box>}
    </Box>
  );
}

export default CurrencySelector;
