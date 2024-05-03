// LanguageSelector.js
import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import Lang from './lang';
import { languages } from '../utils/helpers';
import { textTranslate } from '../utils/helpers';
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
function LanguageSelector({link,data}) {
  const [dropdown, setDropdown] = useState(false)
  const handleChange = (url) => localStorage.setItem('link', url)
  return (
    <Box paddingTop={0.4} sx={{cursor:"pointer"}}>
  {!dropdown && <img onClick={() => setDropdown(true)} src={link} alt="lang" width="24" height="24" />}
    {dropdown &&  <Box borderRadius={5} sx={{overflowY:"scroll"}} width="80%" style={styles.container}>
          <Grid display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6" fontWeight="bold" color="black">Select your language</Typography>
          <IconButton  sx={{color:"gray"}}><Close  onClick={()=>setDropdown(false)}/></IconButton>
          </Grid>
         <Grid maxWidth borderRadius={5} container>
          {languages.map((lang)=>{
            return <Lang abb={lang.abb} url={lang.url} lang={lang.lang} onClick={()=>{setDropdown(false); handleChange(lang.url); textTranslate('fr', data)}}/>
          })}
      </Grid>
    </Box>}
    </Box>
  );
}

export default LanguageSelector;
