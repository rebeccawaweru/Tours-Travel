import { Container, Box, TextField, Typography, Button, FormControl, Stack, MenuItem, Grid } from "@mui/material";
import { BasicSelect, BasicInput} from "./inputs";
import { Search } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
export default function Filter({handleChange, handleSearch}){
   const {t} = useTranslation()
   return (
        <Container maxWidth>
        <Box component={Stack}  spacing={2}  direction={{xs:"column",sm:"row",md:"row"}} justifyContent="space-between" alignItems="center">
        <BasicInput name={t('filter.keyword.name')} start={Search} lbl={t('filter.keyword.label1')} onChange={handleChange}/>
         <BasicSelect name={t('filter.activity.name')} lbl={t('filter.activity.label1')} onChange={handleChange}>
            <MenuItem value={t('filter.activity.Swimming')}>Swimming</MenuItem>
            <MenuItem value={t('filter.activity.Sightseeing')}>Sightseeing</MenuItem>
            <MenuItem value={t('filter.activity.Hiking')}>Hiking</MenuItem>
            <MenuItem value={t('filter.activity.Ski')}>Ski</MenuItem>
            <MenuItem value={t('filter.activity.Paragliding')}>Paragliding</MenuItem>
            <MenuItem value={t('filter.activity.Parachuting')}>Parachuting</MenuItem>
            <MenuItem value={t('filter.activity.Kayaking')}>Kayaking</MenuItem>
            <MenuItem value={t('filter.activity.Baloon Safaris')}>Baloon Safaris</MenuItem>
            <MenuItem value={t('filter.activity.Game Drive')}>Game Drive</MenuItem>
         </BasicSelect>
         <BasicSelect lbl={t('filter.destination.label1')} name={t('filter.destination.name')} onChange={handleChange}>
                <MenuItem value={t("destination.local")}>{t("destination.local")}</MenuItem>
                <MenuItem value={t("destination.africa")}>{t("destination.africa")}</MenuItem>
                <MenuItem value={t("destination.hot")}>{t("destination.hot")}</MenuItem>
                <MenuItem value={t("destination.holiday")}>{t("destination.holiday")}</MenuItem>
                <MenuItem value={t("destination.vacay")}>{t("destination.vacay")}</MenuItem>
                <MenuItem value={t("destination.edu")}>{t("destination.edu")}</MenuItem>
                <MenuItem value={t("destination.special")}>{t("destination.special")}</MenuItem>
                <MenuItem value={t("destination.sports")}>{t("destination.sports")}</MenuItem>
                <MenuItem value={t("destination.charity")}>{t("destination.charity")}</MenuItem>
                <MenuItem value={t("destination.wine")}>{t("destination.wine")}</MenuItem>
                <MenuItem value={t("destination.food")}>{t("destination.food")}</MenuItem>
                <MenuItem value={t("destination.bird")}>{t("destination.bird")}</MenuItem>
                <MenuItem value="Historic & Cultural Site Tours">Historic & Cultural Site Tours</MenuItem>
                <MenuItem value="Sky gliding tours">Sky gliding tours</MenuItem>
                <MenuItem value="Luxury Cruise Trips">Luxury Cruise Trips</MenuItem>
        </BasicSelect>

         <BasicSelect name={t("filter.duration.name")} lbl={t("filter.duration.label1")} onChange={handleChange}>
            <MenuItem value={t("filter.duration.1 Day Tour")}>{t("filter.duration.1 Day Tour")}</MenuItem>
            <MenuItem value={t("filter.duration.2 - 4 Days Tour")}>{t("filter.duration.2 - 4 Days Tour")}</MenuItem>
            <MenuItem value={t("filter.duration.5 - 7 Days Tour")}>{t("filter.duration.5 - 7 Days Tour")}</MenuItem>
            <MenuItem value={t("filter.duration.7+ Days Tour")}>{t("filter.duration.7+ Days Tour")}</MenuItem>
         </BasicSelect>
         <FormControl fullWidth size='small'>
         <Typography fontSize="small" fontWeight="bold">{t("filter.Date")}</Typography>
         <TextField
         onChange={handleChange}
          fullWidth
            name="date"
            type="date"
            size="small"
           sx={{backgroundColor:"whitesmoke", color:"black"}}
         />
         </FormControl>
         <Box>
        <label></label>
        <Button onClick={handleSearch} variant="contained" sx={{marginTop:2}}>{t("filter.Search")}</Button>
        </Box>
        </Box>
        </Container>
    )
}