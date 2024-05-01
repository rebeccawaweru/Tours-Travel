// LanguageSelector.js
import React, { useState } from 'react';
import i18n from '../i18n';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import Lang from './lang';
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
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box paddingTop={0.4} sx={{cursor:"pointer"}}>
     
  {!dropdown && <img onClick={() => {changeLanguage('en');setDropdown(true)}} src='https://res.cloudinary.com/dkjb6ziqg/image/upload/united-states-removebg-preview_mbwjxr.png' alt="English" width="24" height="24" />}
    {dropdown &&  <Box borderRadius={5} sx={{overflowY:"scroll"}} width="80%" style={styles.container}>
          <Grid display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h6" fontWeight="bold" color="black">Select your language</Typography>
          <IconButton  sx={{color:"gray"}}><Close  onClick={()=>setDropdown(false)}/></IconButton>
          </Grid>
       
         <Grid maxWidth borderRadius={5} container>
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/united-states-removebg-preview_mbwjxr.png"
         abb='en'
         lang="English (US)"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/united-kingdom_up03xv.png"
         abb='uk'
         lang="English (UK)"
         />
        <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/france_wjph1w.png"
         abb='fr'
         lang="Français"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/germany_c5a1yx.png"
         abb="ger"
         lang="Deutsch"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714485902/netherlands_sph9h8.png"
         abb="nth"
         lang="Nederlands"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714472109/flag_zcbv1j.png"
         abb="spanish"
         lang="Español"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714485902/flag_1_v8s3jw.png"
         abb="spanishar"
         lang="Español (AR)"
         />
           <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714485901/flag_2_uckvbs.png"
         abb="spanishmx"
         lang="Español (MX)"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487075/catala-removebg-preview_qh6njj.png"
         abb="catala"
         lang="Català"/>
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487222/flag_3_tswaf4.png"
         abb="italy"
         lang="Italiano"/>
         <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487559/flag_4_ajwpjy.png"
         abb="portugal"
         lang="Português (PT)"/>
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487459/flag_5_nvqb3p.png"
         abb="brazil"
         lang="Português (BR)"/>
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488228/world_mvt8j2.png"
         abb="norway"
         lang="Norsk"
         />
          <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488222/flag_6_iqka4d.png"
         abb="finland"
         lang="Suomi"
         />
          <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488072/world_1_xvbvg1.png"
         abb="sweden"
         lang="Svenska"
         />
          <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488046/denmark_ogipgj.png"
         abb="denmark"
         lang="Dansk"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488674/flag_7_folmi5.png"
         abb="czech"
         lang="Čeština"
         />
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488669/flag_8_bz7vtl.png"
         abb="hungary"
         lang="Magyar"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714489058/flag_9_f1peds.png"
         abb="romania"
         lang="Română"
         />
          <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714489079/flag_10_v52dco.png"
         abb="japan"
         lang="日本語"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/china_dgm4gy.png"
         abb="chinesesimplified"
         lang="简体中文"
         />
         <Lang
        url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714490183/tradchineese_coajko.png"
         abb="chinesetraditional"
         lang="繁體中文"
         />
        <Lang
        url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714496690/flag_11_ttccsb.png"
         abb="polish"
         lang="Polski"
         />
           <Lang
           url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714496689/flag_12_asu5ed.png"
         abb="greek"
         lang="Ελληνικά"
         />
        <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714497191/russia_dwxatl.png"
         abb="russian"
         lang="Русский"
         />
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714497348/turkey_t0vfvu.png"
         abb="turkish"
         lang="Türkçe"
         />
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714497022/flag_13_pbx7so.png"
         abb="bulgaria"
         lang="Български"
         />
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714552770/flag_14_q4cozy.png"
         abb="arabic"
         lang="العربية"
         />
        <Lang
        url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714552823/flag_15_fumeon.png"
         abb="korean"
         lang="한국어"
         />
           <Lang
           url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553424/flag_16_jpdmgo.png"
         abb="hebrew"
         lang="עברית"
         />
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553237/austria_b0xnwn.png"
         abb="latvian"
         lang="Latviski"
         />
           <Lang
           url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553592/flag_17_sbulus.png"
         abb="ukranian"
         lang="Українська"
         />
          <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553858/flag_18_lxh0kh.png"
         abb="hindi" 
         lang="हिन्दी"
         />
            <Lang
            url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553931/flag_19_ppc5rp.png"
         abb="indonesian" 
         lang="Bahasa Indonesia"
         />
               <Lang
               url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714556575/malaysia_jcqoam.png"
         abb="Malaysian language" 
         lang="Bahasa Malysia"
         />
        <Lang
        url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714556532/flag_20_a5lxw0.png"
         abb="Thai" 
         lang="ภาษาไทย"
         />
             <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714557049/flag_21_dszynv.png"
         abb="Estonia" 
         lang="Eesti"
         />
                <Lang
          url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714556981/flag_22_aa1fwf.png"
         abb="croatian" 
         lang="Hrvatski"
         />
                <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714557307/flag_23_qk3hnj.png"
         abb="Lithuanian" 
         lang="Lietuvių"
         />
              <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559058/slovania_twbw7f.png"
         abb="Slovak" 
         lang="Slovenčina"
         />
                <Lang
        url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559749/flag_24_m3wsna.png"
         abb="Serbian" 
         lang="Srpski"
         />
                 <Lang
        url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559058/slovania_twbw7f.png"

         abb="Slovene" 
         lang="Slovenščina"
         />

         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559786/world_2_mxthme.png"
         abb="Vietnamese" 
         lang="Tiếng Việt"
         />
         <Lang
         url="https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714560040/flag_25_kfnwxa.png"
         abb="Filipino" 
         lang="Filipino"
         />


         
   
      </Grid>
      
     
     
      
    </Box>}

      {/* Dropdown for language selection */}
      {/* <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select> */}
    </Box>
  );
}

export default LanguageSelector;
