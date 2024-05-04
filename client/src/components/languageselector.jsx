// LanguageSelector.js
import React, { useContext, useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import Lang from './lang';
import { languages } from '../utils/helpers';
import { textTranslate } from '../utils/helpers';
import { useCurrency } from '../context/currency';

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
function LanguageSelector() {
  const [dropdown, setDropdown] = useState(false)
  const {selectLang, setSelectedLang, flag, setFlag} = useCurrency()
  const handleChange = (url) => setFlag(url)
  const handleChangeLang = (lang) => setSelectedLang(lang)
  return (
    <Box paddingTop={0.4} sx={{cursor:"pointer"}}>
  {!dropdown && <img onClick={() => setDropdown(true)} src={flag} alt="lang" width="24" height="24" />}
    {dropdown &&  <Box borderRadius={5} sx={{overflowY:"scroll"}} width="80%" style={styles.container}>
          <Grid display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6" fontWeight="bold" color="black">Select your language</Typography>
          <IconButton  sx={{color:"gray"}}><Close  onClick={()=>setDropdown(false)}/></IconButton>
          </Grid>
         <Grid maxWidth borderRadius={5} container>
          {languages.map((lang)=>{
            return <Lang abb={lang.abb} url={lang.url} lang={lang.lang} onClick={()=>{setDropdown(false); handleChange(lang.url); handleChangeLang(lang.abb)}}/>
          })}
      </Grid>
    </Box>}
    </Box>
  );
}

export default LanguageSelector;
