import { Stack, Typography, Box } from "@mui/material"
import { useTranslation } from 'react-i18next';
export default function Quality(props){
    const {title, caption, src, alt} = props
    const { t } = useTranslation();
    return <Stack direction="row" spacing={2} color="whitesmoke">
      
      <Typography component="img" src={src} alt={alt} loading="lazy"></Typography>
       <Box>
      <Typography fontSize={14} fontWeight="bold">{t (title) }</Typography>
      <Typography fontSize="small">{caption}</Typography>
       </Box>
    </Stack>

}