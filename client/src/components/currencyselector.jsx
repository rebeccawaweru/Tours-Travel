import React, { useEffect, useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useCurrency } from '../context/currency';
import { currencies } from '../utils/helpers';
import Currency from './currency';

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
function CurrencySelector() {
  const [dropdown, setDropdown] = useState(false)
  const [rates, setRates] = useState([])
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const handleChangeCurrency = (currency) => {
    setSelectedCurrency(currency);
  };
  useEffect(() => {
    // fetch('https://api.frankfurter.app/currencies')
    // .then((response) => response.json())
    setRates(Object.entries(currencies).map(([currency, currencyname]) => ({
      currency, currencyname
    })))
  },[])
  return (
    <Box  sx={{cursor:"pointer"}}>
  {!dropdown &&  <IconButton onClick={()=>setDropdown(true)} sx={{ fontSize: 14, letterSpacing:1 }}>{selectedCurrency}</IconButton>}
    {dropdown &&  <Box borderRadius={5} sx={{overflowY:"scroll"}} width="80%" style={styles.container}>
          <Grid display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6" color="black">Choose currency</Typography>
          <IconButton  sx={{color:"gray"}}><Close  onClick={()=>setDropdown(false)}/></IconButton>
          </Grid>
          <Typography variant="p" fontWeight="bold" color="black">Suggested for you</Typography>
          <Grid display="flex" justifyContent="space-between" marginTop={2}>
          <Box onClick={()=> {handleChangeCurrency('KES'); setDropdown(false)}} component={Grid} item xs={12} md={3} color="text.secondary">
              <Typography fontSize="small" color="black">Kenyan Shillings</Typography>
              <Typography>KES</Typography>
           </Box>
          <Box onClick={()=> {handleChangeCurrency('USD'); setDropdown(false)}} component={Grid} item xs={12} md={3} color="text.secondary">
              <Typography fontSize="small" color="black">U.S Dollar</Typography>
              <Typography>USD</Typography>
           </Box>
           <Box onClick={()=> {handleChangeCurrency('EUR'); setDropdown(false)}} component={Grid} item xs={12} md={3} color="text.secondary">
              <Typography fontSize="small" color="black">Euro</Typography>
              <Typography>EUR</Typography>
           </Box>
           <Box onClick={()=> {handleChangeCurrency('GBP'); setDropdown(false)}} component={Grid} item xs={12} md={3} color="text.secondary">
              <Typography fontSize="small" color="black">Pound Sterling</Typography>
              <Typography>GBP</Typography>
           </Box>
           <Box onClick={()=> {handleChangeCurrency('JPY'); setDropdown(false)}} component={Grid} item xs={12} md={3} color="text.secondary">
              <Typography fontSize="small" color="black">Japanese Yen</Typography>
              <Typography>JPY</Typography>
           </Box>
          </Grid>
          <Box onClick={()=> {handleChangeCurrency('INR'); setDropdown(false)}} component={Grid} item xs={12} md={4} marginY={2} color="text.secondary">
              <Typography fontSize="small" color="black">Indian Rupee</Typography>
              <Typography>INR</Typography>
           </Box>
        <Typography variant="p" fontWeight="bold" color="black">All currencies</Typography>
         <Grid maxWidth borderRadius={5} container marginTop={2}>
          {(rates && rates.length > 0) ? rates.map((rate)=>{
            return <Box  onClick={()=> {handleChangeCurrency(rate.currency); setDropdown(false)}} component={Grid} item xs={12} md={3} marginBottom={4} color="text.secondary">
              <Typography fontSize="small" color="black">{rate.currencyname} </Typography>
              <Typography>{rate.currency}</Typography>
            </Box>
                  
          }) : <Typography color="black">Fetching currencies....</Typography>}
      </Grid>
    </Box>}
    </Box>
  );
}

export default CurrencySelector;
