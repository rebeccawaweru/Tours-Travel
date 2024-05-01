import { Stack, Typography, Grid } from "@mui/material"
import i18n from '../i18n'

export default function Lang(props){
    const {url, onClick, lang, abb} = props
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
  
    return  <Stack component={Grid} item xs={12} md={3} marginBottom={4} direction="row" gap={1} alignItems="center" sx={{cursor:"pointer"}}>
    <img src={url} alt={lang} loading="lazy" onClick={() => changeLanguage(abb)} width="36" height="36"/>
    <Typography variant="body2" color="text.secondary">{lang}</Typography>
    </Stack>
}